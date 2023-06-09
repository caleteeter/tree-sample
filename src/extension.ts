import { ExtensionContext, TreeItem, commands, window } from 'vscode';
import { ExampleTreeProvider } from './services/treeDataProvider';

export function activate(context: ExtensionContext) {
	window.registerTreeDataProvider('exampleTreeView', new ExampleTreeProvider());
	commands.registerCommand('exampleTreeView.selectNode', (item: TreeItem) => {
		window.showInformationMessage("clicked");
	});
}