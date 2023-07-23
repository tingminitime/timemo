---
slug: langchain-is-pointless
title: (原文翻譯) LangChain is pointless
authors: tim
tags: [AI, langchain]
---

# (原文翻譯) LangChain is pointless

原文 : [Hack News - Langchain Is Pointless](https://news.ycombinator.com/item?id=36645575)

這篇是 07/08 一位名為 *LASR* 討論 Reddit 的一篇 [Langchain is pointless](https://old.reddit.com/r/LangChain/comments/13fcw36/langchain_is_pointless/) 給出 LangChain 為什麼沒有意義的理由。

*LASR* 在本文和下面回覆有提到實際應用 LangChain 遇到的問題和團隊如何透過自己的方式解決。

<!--truncate-->

### 原文

The reason why Langchain is pointless is that it's trying to solve problems on top of technical foundations that just cannot support it.
The #1 learning is that there is no reusability with the current generation of LLMs. We're using GPT-4 and 3.5T exclusively.

Over the last several months, my team has been building several features using highly sophisticated LLM chains that do all manner of reasoning. The ultimate outputs are very human-like to the point where there is some private excitement that we've built an AGI.

Each feature requires very custom handwritten prompts. Each step in the chain requires handwritten prompts. The input data has to be formatted a very specific way to generate good outputs for that feature/chain step. The part around setting up a DAG orchestration to run these chains is like 5% of the work. 95% is really just in the prompt tuning and data serialization formats.

None of this stuff is reusable. Langchain is attempting to set up abstractions to reuse everything. But what we end up with a mediocre DAG framework where all the instructions/data passing through is just garbage. The longer the chain, the more garbage you find at the output.

We briefly made our own internal Langchain. We tore it down now. Again not that our library or Langchain was bad engineering. It's just not feasible on top of the foundation models we have right now.

### 中文翻譯

Langchain 無意義的原因在於它試圖解決一些技術基礎無法支持的問題。
首要的教訓是，目前世代的 LLMs 沒有可重用性。我們只使用 GPT-4 和 GPT-3.5-Turbo。

在過去幾個月裡，我的團隊一直在使用高度複雜的 LLM chains 來建立多種功能，進行各種推理。最終產出非常接近人類水平，以至於私下裡有些興奮地認為我們已經建立了通用人工智能（AGI）。

每個功能都需要非常定制化的手寫提示。Chain 中的每一步都需要手寫提示。輸入數據必須按照特定方式格式化，才能生成良好的功能性步驟輸出或是 chain 的步驟輸出。設置 DAG（有向無環圖）管控這些 chains 只佔整個工作量的 5%，而真正耗時 95% 則是在提示詞的微調和數據序列化格式上。

所有這些東西都不具備可重用性，Langchain 試圖透過建立抽象層來實現重用，但最終我們得到的只是一個平庸的 DAG 框架，其中所有指令和數據傳遞都是無效的。Chain 愈多愈長，會輸出愈多無效的回答。

我們曾經暫時建立了自己內部使用的 Langchain，但現在已經放棄了。再次強調，這並不是因為我們的庫或者 Langchain 本身存在問題，只是在目前基礎模型之上實施它並不可行。

:::info
DAG（有向無環圖）可以參考 Wiki : [有向無環圖](https://zh.wikipedia.org/zh-tw/%E6%9C%89%E5%90%91%E6%97%A0%E7%8E%AF%E5%9B%BE)。
在這邊 *LASR* 應該是指 chain ( 鏈 ) 之間的串接執行是使用 DAG 的方式設計。
:::

---

### 下面回覆有人提問

How do you deal with the prompt iteration phase and how coupled is that to the DAG phase? I've only worked on a few proofs of concept in this phase, but a thing I struggled with was a strong desire to allow non technical colleagues to mess with the prompts. It wasn't clear to me how much the prompts need to evolve in tandem with the the DAG and how much they can exist separately

你是如何處理提示詞的迭代階段，以及這與 DAG 階段有多緊密關聯？我只在這個階段做過幾個概念驗證，但我遇到的一個問題是強烈希望讓非技術同事參與提示詞的修改。對於提示詞需要與 DAG 同步演變到什麼程度以及它們能否分開獨立存在並不清楚。

### *LASR* 回覆

There are a few increasingly harder things when it comes to prompt customization:

1. Prompts ask LLM to generate input for the next step
2. Prompts ask LLM to generate instructions for the next step
3. Prompts ask LLM to generate the next step

Doing #3 across multiple steps is the promise of Langchain, AutoGPT et al. Pretty much impossible to do with useful quality. Attempting to do #3 very often either ends up completing the chain too early, or just spinning in a loop. Not the kind of thing you can optimize iteratively to good enough quality at production scale. "Retry" as a user-facing operation is just stupid IMO. Either it works well, or we don't offer it as a feature.

So we stopped doing 3 completely. The features now have a narrow usecase and a fully-defined DAG shape upfront. We feed some context on what all the steps are to every step, so it can understand the overall purpose.

#2, we tune these prompts internally within the team. It's very sensitive to specific words. Even things like newlines affects quality too much.

#1 - we've found it's doable for non-tech folks. In some of the features, we expose this to the user somewhat as additional context and mix that in with the pre-built instructions.

So #2 is where it's both hard to get right and still solvable. Every prompt change has to be tested with a huge number of full-chain invocations on real input data before it can be accepted and stabilized. The evaluation of quality is all human, manual work. We tried some other semi-automated approaches, but just not feasible.

All of this is why there is no way Langchain or anything like it is currently useful to built actually valuable user-facing features at production scale.

### 中文翻譯

當涉及到提示詞自定義時，有幾個愈來愈困難的事情：

#1. 提示詞要求 LLM 生成下一步的輸入

#2. 提示詞要求 LLM 生成下一步的指令

#3. 提示詞要求 LLM 生成下一個步驟

在多個步驟中執行 #3 是 Langchain、AutoGPT 等工具保證的步驟，但難以實現有用的成效。如果嘗試經常進行 #3，結果不是會提早完成整個流程，就是會陷入一個死循環，無法通過迭代優化以達到生產規模所需的良好品質。在我看來，「重新嘗試結果」這個操作在使用者的角度看來是愚蠢的，不是它能正常工作，就是我們不提供此功能。

因此，我們完全不做 #3，這些功能現在具有狹隘的使用案例和完全定義好的 DAG 形狀。對於每一步，我們都提供了關於所有步驟目標性質的上下文資訊。

對於 #2，在團隊內部調整這些提示詞非常敏感，即使是換行符 ( `\n` ) 這樣的細節也會對輸出品質產生太大影響。

對於 #1，我們發現非技術人員可以做到。在某些功能中，我們將此作為額外上下文向用戶展示，並與預先建立的指令混合使用。

因此，#2 是難以正確解決但仍然可解決的地方。每次更改提示詞都必須通過大量實際輸入數據的完整連鎖調用進行測試，才能被接受並穩定下來。輸出品質評估完全由人工手動完成，我們嘗試了一些半自動化方法，但都不切實際。

所有這些問題就是導致 Langchain 或類似的工具目前無法在生產規模上構建面向用戶而且真正有價值的功能。

## Reference

---

- [Hack News - Langchain Is Pointless](https://news.ycombinator.com/item?id=36645575)
- [Langchain is pointless](https://old.reddit.com/r/LangChain/comments/13fcw36/langchain_is_pointless/)
