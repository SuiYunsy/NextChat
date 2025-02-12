"use client";

import React from "react";
import { IconButton } from "./button";
// import GithubIcon from "../icons/github.svg";
import ResetIcon from "../icons/reload.svg";
// import { ISSUE_URL } from "../constant";
import Locale from "../locales";
import { showConfirm } from "./ui-lib";
import { useSyncStore } from "../store/sync";
import { useChatStore } from "../store/chat";

interface IErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  info: React.ErrorInfo | null;
}

export class ErrorBoundary extends React.Component<any, IErrorBoundaryState> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, error: null, info: null };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // Update state with error details
    this.setState({ hasError: true, error, info });
  }

  clearAndSaveData() {
    try {
      useSyncStore.getState().export();
    } finally {
      useChatStore.getState().clearAllData();
    }
  }

  render() {
    if (this.state.hasError) {
      // Render error message
      return (
        <div className="error">
          <div style={{ display: "flex", justifyContent: "space-around", alignItems: "baseline" }}>
            <h2>寄了捏👻</h2>
            <IconButton
              icon={<ResetIcon />}
              text="导出数据后重置程序"
              style={{ height: "46px" }}
              onClick={async () => {
                if (await showConfirm(Locale.Settings.Danger.Clear.Confirm)) {
                  this.clearAndSaveData();
                }
              }}
              bordered
            />
          </div>
          <hr />
          <pre style={{ whiteSpace: "pre-wrap" }}>
            <code>{this.state.error?.toString()}</code><br />
            <code>{this.state.info?.componentStack}</code>
          </pre>
        </div>
      );
    }
    // if no error occurred, render children
    return this.props.children;
  }
}
