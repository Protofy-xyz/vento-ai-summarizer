const { boardConnect } = require('protonode')
const { Protofy } = require('protobase')

const run = Protofy("code", async ({ context, states, board }) => {
board.onChange({
    name: 'current_page',
    changed: async (value) => {
        console.log('current_page changeeeeeeeeeeeeeeeeeeeeeeee')
        await board.execute_action({name: 'AI card', params: {}})
    }
})

board.onChange({
    name: 'current_summary',
    changed: async (value) => {
        if (states['pages queue'].length > 0)
            await board.execute_action({name: 'current_page', params: {}})
    },
    inmediate: true
})
})

boardConnect(run)