import { ProviderResult, TreeDataProvider, TreeItem } from "vscode";

export class ExampleTreeProvider implements TreeDataProvider<TreeItem> {
	getTreeItem(element: TreeItem): TreeItem | Thenable<TreeItem> {
		return element;
	}

	getChildren(element?: TreeItem | undefined): ProviderResult<TreeItem[]> {
		if (element === undefined) {
			const item = new TreeItem("Foo");
			item.command = {
				command: "exampleTreeView.selectNode",
				title: "Select Node",
				arguments: [item]
			};
			return [item];
		}
		return null;
	}
}