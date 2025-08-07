// The code below retrieves the next element from the queue `files_input`, removes it from the queue by executing a pop action, and returns the element.
if (board.files_input && board.files_input.length > 0) {
    const nextElement = board.files_input[0];
    await execute_action("files_input", { item: nextElement, action: "pop" });
    return nextElement;
}