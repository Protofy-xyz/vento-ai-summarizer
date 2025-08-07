const preprompt = `
current_page_num: ${board?.["current_page_num"]}
current_summary: ${board?.["current_summary"]}

${board?.["prompt"]}
`

const images = Object.keys(board).filter(k => board[k] && board[k].type && board[k].type == 'frame').map(k => board[k].frame)
const files = Object.keys(board).filter(k => board[k] && board[k].type && board[k].type == 'file').map(k => board[k].path)
const response = await execute_action("/api/v1/chatgpt/send/prompt", { message: preprompt, images, files});
const cleanResponse = response.trim().replace(/```json\s*/i, '').replace(/\s*```$/, '');
await execute_action("current_summary", {
	summary: cleanResponse, // summary of the document
})

return cleanResponse

