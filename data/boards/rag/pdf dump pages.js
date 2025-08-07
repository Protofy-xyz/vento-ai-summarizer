return await execute_action("/api/v1/pdf/dumpPages", {
    path: '/data/public/documents/'+board?.["current_item"],
    outputDir: board?.["create_directory"]
})