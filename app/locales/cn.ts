import { getClientConfig } from "../config/client";
import { SubmitKey } from "../store/config";
// import { SAAS_CHAT_UTM_URL } from "@/app/constant";

const isApp = !!getClientConfig()?.isApp;

const cn = {
  WIP: "该功能仍在开发中……",
  Error: {
    Unauthorized: isApp
      ? `[**密码**🔑](/#/auth)
       `
      : `[**密码**🔑](/#/auth)
       `,
  },
  Auth: {
    Return: "返回",
    Title: "需要密码",
    Tips: "管理员开启了密码验证，请在下方填入",
    SubTips: "或者输入你的 OpenAI 密钥",
    Input: "在此处填写密码",
    Confirm: "确认",
    Later: "稍后再说",
    SaasTips: "配置太麻烦，想要立即使用",
    TopTips:
      "🥳 NextChat AI 首发优惠，立刻解锁 OpenAI o1, GPT-4o, Claude-3.5 等最新大模型",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} 条消息`,
  },
  Chat: {
    SubTitle: (count: number) => `共 ${count} 条消息`,
    EditMessage: {
      Title: "编辑对话",
      Topic: {
        Title: "对话标题",
        SubTitle: "更改当前对话标题",
      },
    },
    Actions: {
      ChatList: "查看消息列表",
      CompressedHistory: "查看压缩后的历史消息摘要",
      Export: "导出对话",
      Copy: "复制",
      Stop: "停止",
      Retry: "重试",
      Pin: "固定",
      PinToastContent: "已将 1 条消息固定至预设提示词",
      PinToastAction: "查看",
      Delete: "删除",
      Edit: "编辑",
      FullScreen: "全屏",
      RefreshTitle: "刷新标题",
      RefreshToast: "已发送刷新标题请求",
      Speech: "朗读",
      StopSpeech: "停止",
    },
    Commands: {
      new: "新建对话",
      newm: "从面具新建对话",
      next: "下一个对话",
      prev: "上一个对话",
      clear: "清除上下文",
      fork: "复制对话",
      del: "删除对话",
    },
    InputActions: {
      Stop: "停止",
      ToBottom: "置底",
      Theme: {
        auto: "自动主题",
        light: "亮色模式",
        dark: "深色模式",
      },
      Prompt: "快捷指令",
      Masks: "所有面具",
      Clear: "分隔",
      Settings: "设置",
      UploadImage: "上传图片",
    },
    Rename: "重命名对话",
    Typing: "正在输入…",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} 发送`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += "，Shift + Enter 换行";
      }
      return inputHints + "，/ 触发补全，: 触发命令";
    },
    Send: "发送",
    StartSpeak: "说话",
    StopSpeak: "停止",
    Config: {
      Reset: "清除记忆",
      SaveAs: "存为面具",
    },
    IsContext: "预设提示词",
    ShortcutKey: {
      Title: "键盘快捷方式",
      newChat: "打开新对话",
      focusInput: "聚焦输入框",
      copyLastMessage: "复制最后一个回复",
      copyLastCode: "复制最后一个代码块",
      showShortcutKey: "显示快捷方式",
      clearContext: "清除上下文",
    },
  },
  Export: {
    Title: "导出对话",
    Copy: "全部复制",
    Download: "下载文件",
    Share: "分享到 ShareGPT",
    MessageFromYou: "用户",
    MessageFromChatGPT: "ChatGPT",
    Format: {
      Title: "导出格式",
      SubTitle: "Markdown文本、PNG图片、JSON文件",
    },
    IncludeContext: {
      Title: "包含面具上下文",
      SubTitle: "是否在消息中展示面具上下文",
    },
    Steps: {
      Select: "选取",
      Preview: "预览",
    },
    Image: {
      Toast: "正在生成截图",
      Modal: "长按或右键保存图片",
    },
    Artifacts: {
      Title: "分享页面",
      Error: "分享失败",
    },
  },
  Select: {
    Search: "搜索消息",
    All: "选取全部",
    Latest: "最近几条",
    Clear: "清除选中",
  },
  Memory: {
    Title: "历史消息摘要",
    EmptyContent: "历史消息内容过短，暂无压缩后的摘要",
    Send: "自动压缩历史消息生成摘要，并作为上下文发送",
    Copy: "复制摘要",
    Reset: "[unused]",
    ResetConfirm: "确认清空摘要？",
  },
  Home: {
    NewChat: "新对话",
    DeleteChat: "确认删除选中的对话？",
    DeleteToast: "已删除对话",
    Revert: "撤销",
    Search: "搜索对话",
  },
  Settings: {
    Title: "设置",
    SubTitle: "所有设置选项",
    ShowPassword: "显示密码",

    Danger: {
      Reset: {
        Title: "重置所有设置",
        SubTitle: "重置所有设置项回默认值",
        Action: "立即重置",
        Confirm: "确认重置所有设置？",
      },
      Clear: {
        Title: "清除所有数据",
        SubTitle: "清除所有对话、设置数据",
        Action: "立即清除",
        Confirm: "确认清除所有对话、设置数据？",
      },
    },
    Lang: {
      Name: "Language", // 注意：如果要添加新的翻译，请不要翻译此值，将它保留为 `Language`
      All: "所有语言",
    },
    Avatar: "头像",
    FontSize: {
      Title: "字体大小",
      SubTitle: "对话内容的字体大小",
    },
    FontFamily: {
      Title: "字体名称",
      SubTitle: "对话内容的字体",
      Placeholder: "字体名称",
    },
    InjectSystemPrompts: {
      Title: "注入系统级提示信息",
      SubTitle: "你是一个大语言模型，当前模型、时间、latex格式分别是...",
    },
    InputTemplate: {
      Title: "用户输入预处理",
      SubTitle: "用户最新的一条消息会填充到此模板",
    },

    Update: {
      Version: (x: string) => `当前版本：${x}`,
      IsLatest: "已是最新版本",
      CheckUpdate: "检查更新",
      IsChecking: "正在检查更新...",
      FoundUpdate: (x: string) => `发现新版本：${x}`,
      GoToUpdate: "前往更新",
      Success: "更新成功！",
      Failed: "更新失败",
    },
    SendKey: "发送键",
    Theme: "主题",
    TightBorder: "无边框模式",
    SendPreviewBubble: {
      Title: "输入时预览消息",
      SubTitle: "在预览消息气泡中渲染 Markdown 内容",
    },
    AutoGenerateTitle: {
      Title: "自动生成标题",
      SubTitle: "根据对话内容生成合适的标题",
    },
    Sync: {
      CloudState: "云端数据",
      NotSyncYet: "还没有进行过同步",
      Success: "同步成功",
      Fail: "同步失败",

      Config: {
        Modal: {
          Title: "配置云同步",
          Check: "检查可用性",
        },
        SyncType: {
          Title: "同步类型",
          SubTitle: "选择喜爱的同步服务器",
        },
        Proxy: {
          Title: "启用代理",
          SubTitle: "在浏览器中同步时，必须启用代理以避免跨域限制",
        },
        ProxyUrl: {
          Title: "代理地址",
          SubTitle: "仅适用于本项目自带的跨域代理",
        },

        WebDav: {
          Endpoint: "WebDAV 地址",
          UserName: "用户名",
          Password: "密码",
        },

        UpStash: {
          Endpoint: "UpStash Redis REST Url",
          UserName: "备份名称",
          Password: "UpStash Redis REST Token",
        },
      },

      LocalState: "本地数据",
      Overview: (overview: any) => {
        return `${overview.chat} 条对话，${overview.message} 条消息，${overview.prompt} 条提示词，${overview.mask} 个面具`;
      },
      ImportFailed: "导入失败",
    },
    Mask: {
      Splash: {
        Title: "面具启动页",
        SubTitle: "新建对话时，展示面具启动页",
      },
      Builtin: {
        Title: "隐藏内置面具",
        SubTitle: "在所有面具列表中隐藏内置面具",
      },
    },
    Prompt: {
      Disable: {
        Title: "禁用提示词自动补全",
        SubTitle: "在输入框开头输入 / 即可触发自动补全",
      },
      List: "自定义提示词列表",
      ListCount: (builtin: number, custom: number) =>
        `内置 ${builtin} 条，用户定义 ${custom} 条`,
      Edit: "编辑",
      Modal: {
        Title: "提示词列表",
        Add: "新建",
        Search: "搜索提示词",
      },
      EditModal: {
        Title: "编辑提示词",
      },
    },
    HistoryCount: {
      Title: "附带历史消息数",
      SubTitle: "每次请求携带的历史消息数",
    },
    CompressThreshold: {
      Title: "历史消息长度压缩阈值",
      SubTitle: "当未压缩的历史消息内容长度超过该值时，将进行压缩并生成摘要",
    },

    Usage: {
      Title: "余额查询",
      SubTitle(used: any, total: any) {
        return `已用 $${used} / 总额 $${total}`;
      },
      IsChecking: "正在检查…",
      Check: "重新检查",
      NoAccess: "输入 API Key 或访问密码查看余额",
    },

    Access: {
      SaasStart: {
        Title: "使用 NextChat AI",
        Label: "（性价比最高的方案）",
        SubTitle:
          "由 NextChat 官方维护, 零配置开箱即用，支持 OpenAI o1, GPT-4o, Claude-3.5 等最新大模型",
        ChatNow: "立刻对话",
      },
      AccessCode: {
        Title: "访问密码",
        SubTitle: "管理员已开启加密访问",
        Placeholder: "请输入访问密码",
      },
      CustomEndpoint: {
        Title: "自定义接口",
        SubTitle: "是否使用自定义 Azure 或 OpenAI 服务",
      },
      Provider: {
        Title: "模型服务商",
        SubTitle: "切换不同的服务商",
      },
      OpenAI: {
        ApiKey: {
          Title: "API Key",
          SubTitle: "使用自定义 OpenAI Key 绕过密码访问限制",
          Placeholder: "OpenAI API Key",
        },

        Endpoint: {
          Title: "接口地址",
          SubTitle: "除默认地址外，必须包含 http(s)://",
        },
      },
      Azure: {
        ApiKey: {
          Title: "接口密钥",
          SubTitle: "使用自定义 Azure Key 绕过密码访问限制",
          Placeholder: "Azure API Key",
        },

        Endpoint: {
          Title: "接口地址",
          SubTitle: "样例：",
        },

        ApiVerion: {
          Title: "接口版本 (azure api version)",
          SubTitle: "选择指定的部分版本",
        },
      },
      Anthropic: {
        ApiKey: {
          Title: "接口密钥",
          SubTitle: "使用自定义 Anthropic Key 绕过密码访问限制",
          Placeholder: "Anthropic API Key",
        },

        Endpoint: {
          Title: "接口地址",
          SubTitle: "样例：",
        },

        ApiVerion: {
          Title: "接口版本 (claude api version)",
          SubTitle: "选择一个特定的 API 版本输入",
        },
      },
      Google: {
        ApiKey: {
          Title: "API 密钥",
          SubTitle: "从 Google AI 获取您的 API 密钥",
          Placeholder: "Google AI API KEY",
        },

        Endpoint: {
          Title: "终端地址",
          SubTitle: "示例：",
        },

        ApiVersion: {
          Title: "API 版本（仅适用于 gemini-pro）",
          SubTitle: "选择一个特定的 API 版本",
        },
        GoogleSafetySettings: {
          Title: "Google 安全过滤级别",
          SubTitle: "设置内容过滤级别",
        },
      },
      Baidu: {
        ApiKey: {
          Title: "API Key",
          SubTitle: "使用自定义 Baidu API Key",
          Placeholder: "Baidu API Key",
        },
        SecretKey: {
          Title: "Secret Key",
          SubTitle: "使用自定义 Baidu Secret Key",
          Placeholder: "Baidu Secret Key",
        },
        Endpoint: {
          Title: "接口地址",
          SubTitle: "不支持自定义前往.env配置",
        },
      },
      Tencent: {
        ApiKey: {
          Title: "API Key",
          SubTitle: "使用自定义腾讯云API Key",
          Placeholder: "Tencent API Key",
        },
        SecretKey: {
          Title: "Secret Key",
          SubTitle: "使用自定义腾讯云Secret Key",
          Placeholder: "Tencent Secret Key",
        },
        Endpoint: {
          Title: "接口地址",
          SubTitle: "不支持自定义前往.env配置",
        },
      },
      ByteDance: {
        ApiKey: {
          Title: "接口密钥",
          SubTitle: "使用自定义 ByteDance API Key",
          Placeholder: "ByteDance API Key",
        },
        Endpoint: {
          Title: "接口地址",
          SubTitle: "样例：",
        },
      },
      Alibaba: {
        ApiKey: {
          Title: "接口密钥",
          SubTitle: "使用自定义阿里云API Key",
          Placeholder: "Alibaba Cloud API Key",
        },
        Endpoint: {
          Title: "接口地址",
          SubTitle: "样例：",
        },
      },
      Moonshot: {
        ApiKey: {
          Title: "接口密钥",
          SubTitle: "使用自定义月之暗面API Key",
          Placeholder: "Moonshot API Key",
        },
        Endpoint: {
          Title: "接口地址",
          SubTitle: "样例：",
        },
      },
      DeepSeek: {
        ApiKey: {
          Title: "接口密钥",
          SubTitle: "使用自定义DeepSeek API Key",
          Placeholder: "DeepSeek API Key",
        },
        Endpoint: {
          Title: "接口地址",
          SubTitle: "样例：",
        },
      },
      XAI: {
        ApiKey: {
          Title: "接口密钥",
          SubTitle: "使用自定义XAI API Key",
          Placeholder: "XAI API Key",
        },
        Endpoint: {
          Title: "接口地址",
          SubTitle: "样例：",
        },
      },
      ChatGLM: {
        ApiKey: {
          Title: "接口密钥",
          SubTitle: "使用自定义 ChatGLM API Key",
          Placeholder: "ChatGLM API Key",
        },
        Endpoint: {
          Title: "接口地址",
          SubTitle: "样例：",
        },
      },
      Stability: {
        ApiKey: {
          Title: "接口密钥",
          SubTitle: "使用自定义 Stability API Key",
          Placeholder: "Stability API Key",
        },
        Endpoint: {
          Title: "接口地址",
          SubTitle: "样例：",
        },
      },
      Iflytek: {
        ApiKey: {
          Title: "ApiKey",
          SubTitle: "从讯飞星火控制台获取的 APIKey",
          Placeholder: "APIKey",
        },
        ApiSecret: {
          Title: "ApiSecret",
          SubTitle: "从讯飞星火控制台获取的 APISecret",
          Placeholder: "APISecret",
        },
        Endpoint: {
          Title: "接口地址",
          SubTitle: "样例：",
        },
      },
      CustomModel: {
        Title: "自定义模型名",
        SubTitle: "增加自定义模型，使用英文逗号隔开",
      },
    },

    Model: "模型 (model)",
    CompressModel: {
      Title: "摘要模型",
      SubTitle: "用于压缩历史消息、生成对话标题的模型",
    },
    Temperature: {
      Title: "随机性 (temperature)",
      SubTitle: "值越大，回复越随机",
    },
    TopP: {
      Title: "核采样 (top_p)",
      SubTitle: "与随机性类似，但不要和随机性一起更改",
    },
    MaxTokens: {
      Title: "输出截断 (max_tokens)",
      SubTitle: "值 -1 不发送此字段，值 1024 有望解决报错",
    },
    PresencePenalty: {
      Title: "话题新鲜度 (presence_penalty)",
      SubTitle: "值越大，越有可能扩展到新话题",
    },
    FrequencyPenalty: {
      Title: "频率惩罚度 (frequency_penalty)",
      SubTitle: "值越大，越有可能降低重复字词",
    },
    TTS: {
      Enable: {
        Title: "启用文本转语音",
        SubTitle: "启用文本生成语音服务",
      },
      Autoplay: {
        Title: "启用自动朗读",
        SubTitle: "自动生成语音并播放，需先开启文本转语音开关",
      },
      Model: "模型",
      Engine: "转换引擎",
      Voice: {
        Title: "声音",
        SubTitle: "生成语音时使用的声音",
      },
      Speed: {
        Title: "速度",
        SubTitle: "生成语音的速度",
      },
    },
    Realtime: {
      Enable: {
        Title: "实时对话",
        SubTitle: "开启实时对话功能",
      },
      Provider: {
        Title: "模型服务商",
        SubTitle: "切换不同的服务商",
      },
      Model: {
        Title: "模型",
        SubTitle: "选择一个模型",
      },
      ApiKey: {
        Title: "API Key",
        SubTitle: "API Key",
        Placeholder: "API Key",
      },
      Azure: {
        Endpoint: {
          Title: "接口地址",
          SubTitle: "接口地址",
        },
        Deployment: {
          Title: "部署名称",
          SubTitle: "部署名称",
        },
      },
      Temperature: {
        Title: "随机性 (temperature)",
        SubTitle: "值越大，回复越随机",
      },
    },
  },
  Store: {
    DefaultTopic: "新对话",
    BotHello: "[**面具**🎭](/#/masks) | [**插件**🧩](/#/plugins) | **[S.D.🎨](/#/sd)** | [**搜索**🔍](/#/search-chat) | **Ctrl+/**",
    Error: "出错了，稍后重试吧",
    Prompt: {
      History: (content: string) => "这是历史对话总结作为前情提要：" + content,
      Topic:
        "使用四到五个字直接返回这句话的简要主题，不要解释、不要标点、不要语气词、不要多余文本，不要加粗，如果没有主题，请直接返回“闲聊”",
      Summarize:
        "简要总结一下对话内容，用作后续的上下文提示 prompt，控制在 200 字以内",
    },
  },
  Copy: {
    Success: "已写入剪贴板",
    Failed: "复制失败，请赋予剪贴板权限",
  },
  Download: {
    Success: "内容已下载到您的目录。",
    Failed: "下载失败。",
  },
  Context: {
    Toast: (x: any) => `包含 ${x} 条预设提示词`,
    Edit: "当前对话设置",
    Add: "新增一条消息",
    Clear: "上下文已清除",
    Revert: "恢复上下文",
  },
  Discovery: {
    Name: "发现",
  },
  FineTuned: {
    Sysmessage: "你是一个助手",
  },
  SearchChat: {
    Name: "搜索对话",
    Page: {
      Title: "搜索对话",
      Search: "输入搜索关键词",
      NoResult: "没有找到结果",
      NoData: "没有数据",
      Loading: "加载中",

      SubTitle: (count: number) => `搜索到 ${count} 条结果`,
    },
    Item: {
      View: "查看",
    },
  },
  Plugin: {
    Name: "插件",
    Page: {
      Title: "插件",
      SubTitle: (count: number) => `${count} 个插件`,
      Search: "搜索插件",
      Create: "新建",
      Find: "您可以在Github上找到优秀的插件：",
    },
    Item: {
      Info: (count: number) => `${count} 方法`,
      View: "查看",
      Edit: "编辑",
      Delete: "删除",
      DeleteConfirm: "确认删除？",
    },
    Auth: {
      None: "不需要授权",
      Basic: "Basic",
      Bearer: "Bearer",
      Custom: "自定义",
      CustomHeader: "自定义参数名称",
      Token: "Token",
      Proxy: "使用代理",
      ProxyDescription: "使用代理解决 CORS 错误",
      Location: "位置",
      LocationHeader: "Header",
      LocationQuery: "Query",
      LocationBody: "Body",
    },
    EditModal: {
      Title: (readonly: boolean) => `编辑插件 ${readonly ? "（只读）" : ""}`,
      Download: "下载",
      Auth: "授权方式",
      Content: "OpenAPI Schema",
      Load: "从网页加载",
      Method: "方法",
      Error: "格式错误",
    },
  },
  Mask: {
    Name: "面具",
    Page: {
      Title: "预设角色面具",
      SubTitle: (count: number) => `${count} 个预设角色定义`,
      Search: "搜索角色面具",
      Create: "新建",
    },
    Item: {
      Info: (count: number) => `${count} 条预设`,
      Chat: "对话",
      View: "查看",
      Edit: "编辑",
      Delete: "删除",
      DeleteConfirm: "确认删除？",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `编辑预设面具${readonly ? "（只读）" : ""}`,
      Download: "下载预设",
      Clone: "克隆预设",
    },
    Config: {
      Avatar: "角色头像",
      Name: "角色名称",
      Sync: {
        Title: "使用全局设置",
        SubTitle: "当前对话是否使用全局模型设置",
        Confirm: "当前对话的自定义设置将会被自动覆盖，确认启用全局设置？",
      },
      HideContext: {
        Title: "隐藏预设消息",
        SubTitle: "隐藏后预设消息不会出现在对话界面",
      },
      Artifacts: {
        Title: "启用Artifacts",
        SubTitle: "启用之后可以直接渲染HTML页面",
      },
      CodeFold: {
        Title: "启用代码折叠",
        SubTitle: "启用之后可以自动折叠过长的代码块",
      },
      Share: {
        Title: "分享此面具",
        SubTitle: "生成此面具的直达链接",
        Action: "复制链接",
      },
    },
  },
  NewChat: {
    Return: "返回",
    Skip: "直接开始",
    NotShow: "不再展示",
    ConfirmNoShow: "确认禁用？禁用后可以随时在设置中重新启用。",
    Title: "挑选一个面具",
    SubTitle: "现在开始，与面具背后的灵魂思维碰撞",
    More: "查看全部",
  },

  URLCommand: {
    Code: "检测到链接中已经包含访问码，是否自动填入？",
    Settings: "检测到链接中包含了预制设置，是否自动填入？",
  },

  UI: {
    Confirm: "确认",
    Cancel: "取消",
    Close: "关闭",
    Create: "新建",
    Edit: "编辑",
    Export: "导出",
    Import: "导入",
    Sync: "同步",
    Config: "配置",
  },
  Exporter: {
    Description: {
      Title: "只有清除上下文之后的消息会被展示",
    },
    Model: "模型",
    Messages: "消息",
    Topic: "标题",
    Time: "时间",
  },
  SdPanel: {
    Prompt: "画面提示",
    NegativePrompt: "否定提示",
    PleaseInput: (name: string) => `请输入${name}`,
    AspectRatio: "横纵比",
    ImageStyle: "图像风格",
    OutFormat: "输出格式",
    AIModel: "AI模型",
    ModelVersion: "模型版本",
    Submit: "提交生成",
    ParamIsRequired: (name: string) => `${name}不能为空`,
    Styles: {
      D3Model: "3D模型",
      AnalogFilm: "模拟电影",
      Anime: "动漫",
      Cinematic: "电影风格",
      ComicBook: "漫画书",
      DigitalArt: "数字艺术",
      Enhance: "增强",
      FantasyArt: "幻想艺术",
      Isometric: "等角",
      LineArt: "线描",
      LowPoly: "低多边形",
      ModelingCompound: "建模材料",
      NeonPunk: "霓虹朋克",
      Origami: "折纸",
      Photographic: "摄影",
      PixelArt: "像素艺术",
      TileTexture: "贴图",
    },
  },
  Sd: {
    SubTitle: (count: number) => `共 ${count} 条绘画`,
    Actions: {
      Params: "查看参数",
      Copy: "复制提示词",
      Delete: "删除",
      Retry: "重试",
      ReturnHome: "返回首页",
      History: "查看历史",
    },
    EmptyRecord: "暂无绘画记录",
    Status: {
      Name: "状态",
      Success: "成功",
      Error: "失败",
      Wait: "等待中",
      Running: "运行中",
    },
    Danger: {
      Delete: "确认删除？",
    },
    GenerateParams: "生成参数",
    Detail: "详情",
  },
};

type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

export type LocaleType = typeof cn;
export type PartialLocaleType = DeepPartial<typeof cn>;

export default cn;
