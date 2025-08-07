// This code retrieves the next element from the queue 'pages queue', removes it from the queue by executing a 'pop' action, and returns the element.
// The action 'pages queue' is used to perform the 'pop' operation on the queue.
if (board["pages queue"] && board["pages queue"].length > 0) {
    const nextElement = board["pages queue"][0];
    await execute_action("pages queue", { item: nextElement, action: "pop" });
    return {type: 'file', path: board?.["create_directory"] + '/' + nextElement}
} else {
    return "Code generation error: pages_queue is empty or undefined.";
}