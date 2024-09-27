import { defineConfig } from 'tinacms'

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'main'

export default defineConfig({
	branch: 'main',
	clientId: '85e5b7b1-aa40-4125-a470-99b33dbca8ca', // Get this from tina.io
	token: '9ba6b2b1add4137fe9f4f971b840b314980b32b4', // Get this from tina.io

	build: {
		outputFolder: 'admin',
		publicFolder: 'public'
	},
	media: {
		tina: {
			mediaRoot: '',
			publicFolder: 'public'
		}
	},
	schema: {
		collections: [
			{
				name: 'post',
				label: 'Posts',
				path: 'content/posts',
				fields: [
					{
						type: 'string',
						name: 'title',
						label: 'Title',
						isTitle: true,
						required: true
					},
					{
						type: 'rich-text',
						name: 'body',
						label: 'Body',
						isBody: true
					}
				]
			}
		]
	}
})
