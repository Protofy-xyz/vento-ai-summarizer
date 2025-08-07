const files = await execute_action("/api/core/v1/files", userParams)

// First, clear the current files in the queue
await execute_action("files_input", { action: "clear" });

// Then, push each of the files from the files_read array into the files_input queue
for (const file of files) {
    await execute_action("files_input", { item: file, action: "push" });
}
