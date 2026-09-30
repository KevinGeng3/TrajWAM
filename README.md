# TrajWAM 论文主页使用说明

这个静态主页基于 [Academic Project Page Template](https://github.com/eliahuhorwitz/Academic-project-page-template) 制作，已接入所提供的论文、演示视频、三张论文裁图与两张主结果表。将本目录推送到 GitHub 后，可通过 GitHub Pages 发布为公开网页；页面内容在 `index.html`，模板样式在 `static/css/index.css`，页面补充样式在 `static/css/content.css`，交互在 `static/js/index.js`；无需安装 npm 依赖或执行构建。

## 本地预览

在项目目录的上一级打开终端并执行：

```sh
cd trajwam-project-page
python3 -m http.server 8000
```

然后打开 <http://localhost:8000>。终端按 `Ctrl+C` 可停止服务器。也可以直接用浏览器打开 `index.html` 查看页面；使用本地服务器更适合检查媒体和复制引用功能。

## 替换高清图片

当前图片是从所提供论文中裁出的预览图。将高清图以相同文件名覆盖下列文件，即可保留现有页面布局：

| 文件路径 | 页面用途 |
| --- | --- |
| `static/images/fig1-motivation-performance.png` | Abstract 后的介绍图：论文 Figure 1，研究动机与性能对比 |
| `static/images/fig2-method-overview.png` | Method：论文 Figure 2，训练和推理流程 |
| `static/images/fig6-real-world-comparison.png` | Results：论文 Figure 6，真实机器人序列对比 |

若使用其他文件名或格式，请同步修改 `index.html` 对应的 `<img src="…">`。建议保留原图宽高比；尺寸改变时，同步更新图片的 `width` 和 `height` 属性。

## 更新论文和视频

- 论文文件：`static/pdfs/TrajWAM.pdf`。同名替换即可更新顶部 Paper 按钮打开的论文。
- 视频文件：`static/videos/TrajWAM-demo.mp4`，播放器位于标题、作者和资源按钮之后，是页面首个内容区块。同名替换即可更新播放器和视频下载链接。推荐使用浏览器支持较好的 H.264 视频 / AAC 音频 MP4。
- 视频封面：`static/images/video-cover.jpg` 从所提供视频的首帧提取。替换此图片，或修改 `index.html` 中的 `<video poster="…">`。
- 网站图标：`static/images/favicon.svg`。

## 更新结果表格

Results 中的表格直接使用 HTML，可在 `index.html` 搜索 `Table I.` 或 `Table II.` 修改，不需要替换图片：

- Table I 对应论文第 6 页的 DOMINO 仿真结果，包含 13 个方法的 SR、MS 与推理延迟。
- Table II 对应论文第 7 页的真机结果，包含传送带和旋转盘任务在三种速度、四类物体上的全部成功次数，以及总体成功次数和成功率。宽表支持横向滚动，方法名称列在滚动时固定。

每项真机任务的每种方法共评测 240 次，两项任务合计 480 次。更新数据时，也请同步更新表格上下的实验描述和对比结论。表格样式在 `static/css/content.css` 中以 `results-` 开头。

## 更新作者主页、代码和 arXiv 链接

在 `index.html` 中搜索 `class="author-name"`，将对应的姓名 `<span>` 改为个人主页链接，并保留外层 `author-block` 和上标，例如：

```html
<span class="author-block"><a href="作者主页的完整网址" target="_blank" rel="noopener">Haohan Geng</a><sup>1,†</sup>,</span>
```

顶部资源按钮为 Paper、arXiv 和 Code。Code 已链接到官方仓库 <https://github.com/KevinGeng3/TrajWAM>，该仓库目前注明代码待发布。arXiv 尚未确认公开地址，按钮暂为禁用状态。

arXiv 地址确定后，搜索 `class="publication-links"`，将 arXiv 的 `<button …>…</button>` 替换为以下链接，并填写真实地址：

```html
<a class="external-link button is-normal is-rounded is-dark" href="arXiv 摘要页的完整网址" target="_blank" rel="noopener"><span class="icon"><i class="fas fa-file-alt" aria-hidden="true"></i></span><span>arXiv</span></a>
```

作者主页尚待补充。添加或更新链接后应逐一打开核对。

## 引用和正式发表信息

当前 BibTeX 使用手稿条目 `@misc{geng_trajwam, …}`，只包含已确认的论文标题和作者，并以 `note = {Manuscript}` 标注。**正式引用年份、会议或期刊（venue）尚待确认**；视频文件名不作为已录用或正式发表的依据。

发表信息确定后，请更新 `index.html` 的 BibTeX，并按实际情况添加 `year`、`booktitle` 或 `journal`、`doi`、`url` 等字段，选择对应条目类型。同时可补充页面顶部的发表信息及 `<head>` 中的 `citation_publication_date`、`citation_conference_title` 等元数据。请不要直接保留未填写的示例值。

## 发布到 GitHub Pages

1. 在 GitHub 新建用于论文主页的仓库，或使用已有网站仓库。
2. 上传 **`trajwam-project-page` 目录内的内容**，使 `index.html`、`static/`、`README.md` 和 `.nojekyll` 位于仓库根目录。不要上传外层的 `work/` 或整个工作目录；也不要再套一层 `trajwam-project-page/`，除非有意将网页放在子路径下。
3. 在仓库的 **Settings → Pages** 中，选择 **Deploy from a branch**，选择所用分支（通常为 `main`）以及 **`/ (root)`**，然后保存。
4. 等待 GitHub Pages 部署完成，使用其显示的网址访问网站，检查 Paper 和 Code 按钮、视频播放、图片、手机布局和 BibTeX 复制，并在 arXiv 链接发布后验证该按钮。
5. 正式网址确定后，可在 `<head>` 中新增 `citation_pdf_url`（论文 PDF 的完整公开地址）和 `og:url`（网页地址）等元数据。当前页面尚未设置这两项。

## 模板来源与授权

页面基于 [Academic Project Page Template](https://github.com/eliahuhorwitz/Academic-project-page-template)，该模板借鉴了 [Nerfies](https://nerfies.github.io/)。页面页脚保留了来源链接与 [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) 网站模板许可说明，后续修改与分享时请保留这些归属信息，并遵循相应许可。

上述许可针对网站模板，不表示论文、视频或研究图片也自动采用该许可；研究材料的授权应以作者实际发布的说明为准。
