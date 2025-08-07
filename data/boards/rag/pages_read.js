const pages = await execute_action("/api/core/v1/files", {
    path: board?.["create_directory"]
});

// Ordenar por número
pages.sort((a, b) => {
    const getNumber = (filename) => {
        const match = filename.match(/page-(\d+)\.pdf/);
        return match ? parseInt(match[1], 10) : 0;
    };

    return getNumber(a) - getNumber(b);
});

await execute_action("pages queue", {
	action: 'reset',
});

for (let i = 0; i < pages.length; i++) {
    await execute_action("pages queue", {
        action: 'push',
        item: pages[i]
    });
}

return pages;