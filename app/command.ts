import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
// import Locale from "./locales";

type Command = (param: string) => void;
interface Commands {
  fill?: Command;
  submit?: Command;
  mask?: Command;
  code?: Command;
  settings?: Command;
}

export function useCommand(commands: Commands = {}) {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    let shouldUpdate = false;
    searchParams.forEach((param, name) => {
      const commandName = name as keyof Commands;
      if (typeof commands[commandName] === "function") {
        commands[commandName]!(param);
        searchParams.delete(name);
        shouldUpdate = true;
      }
    });

    if (shouldUpdate) {
      setSearchParams(searchParams);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams, commands]);
}

interface ChatCommands {
  resend?: Command;
  add?: Command;
  mask?: Command;
  // clear?: Command;
  del?: Command;
  fork?: Command;
  next?: Command;
  prev?: Command;
}

// Compatible with Chinese colon character "："
export const ChatCommandPrefix = /^[:：]/;

export function useChatCommand(commands: ChatCommands = {}) {
  function extract(userInput: string) {
    const match = userInput.match(ChatCommandPrefix);
    if (match) {
      return userInput.slice(1) as keyof ChatCommands;
    }
    return userInput as keyof ChatCommands;
  }

  function search(userInput: string) {
    const input = extract(userInput);
    const desc = {
      resend: "重发消息",
      add: "新增对话",
      mask: "面具对话",
      // clear: "清除上下文",
      del: "删除对话",
      fork: "复制对话",
      next: "下一个对话",
      prev: "上一个对话",
    };
    return Object.keys(commands)
      .filter((c) => c.startsWith(input))
      .map((c) => ({
        title: desc[c as keyof ChatCommands],
        content: ":" + c,
      }));
  }

  function match(userInput: string) {
    const command = extract(userInput);
    const matched = typeof commands[command] === "function";

    return {
      matched,
      invoke: () => matched && commands[command]!(userInput),
    };
  }

  return { match, search };
}
