import React from 'react'
import { types, Text, RichText } from 'react-bricks/frontend'

const Footer_copyRight: types.Brick = () => {
    const featursArray = [
          types.RichTextFeatures.Bold,
          types.RichTextFeatures.Highlight,
          types.RichTextFeatures.Italic,
          types.RichTextFeatures.Code,
          types.RichTextFeatures.Link,
          types.RichTextFeatures.OrderedList,
          types.RichTextFeatures.Quote,
          types.RichTextFeatures.UnorderedList
    ]
  return (
    <div className="p-6 text-center">
      <RichText
        propName="title"
        renderBlock={({ children }) => <h1 className="text-2xl font-bold">{children}</h1>}
        placeholder="Type a title..."
        allowedFeatures={featursArray}
      />
      <RichText
        propName="description"
        renderBlock={({ children }) => (
          <p className="text-  text-gray-500">{children}</p>
        )}
        placeholder="Type a description"
        renderHighlight={({children})=>(
            <span className='px-1 rounded bg-blue-200 text-blue-900'>
                {children}
            </span>
        )}   
        allowedFeatures={featursArray}
      />
    </div>
  )
}

Footer_copyRight.schema = {
  name: 'Footer_copyRight',
  label: 'Footer_copyRight',
  getDefaultProps: () => ({
    title: 'Hello, world!',
    description: 'Lorem ipsum dolor sit amet.',
  }),
  sideEditProps: [],
}

export default Footer_copyRight;