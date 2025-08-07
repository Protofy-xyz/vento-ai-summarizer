await execute_action("/api/core/v1/directories", {
    path: '/data/public/documents_meta/'+board?.["current_item"]
})

return '/data/public/documents_meta/'+board?.["current_item"]