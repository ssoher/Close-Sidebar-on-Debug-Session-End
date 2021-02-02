import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('close-sidebar-on-debug-session-end activated');
}

vscode.debug.onDidTerminateDebugSession((e: vscode.DebugSession) => {
    const config = vscode.workspace.getConfiguration('closeSidebarOnDebugEnd');
    const enabled = config.get('enabled', true);

    if(!enabled) return;

    vscode.commands.executeCommand('workbench.action.closeSidebar');
});