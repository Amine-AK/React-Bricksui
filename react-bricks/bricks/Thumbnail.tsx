import React from 'react'
import { types, Text } from 'react-bricks/frontend'

const Thumbnail: types.Brick = () => {
  return (
    <div className="p-6 text-center">
      <Text
        propName="title"
        renderBlock={({ children }) => <h4>{children}</h4>}
        placeholder="Type a title..."
        // multiline={false} : boolean
        // softLineBreak={false} : boolean
      />
    </div>
  )
}

Thumbnail.schema = {
  name: 'thumbnail',
  label: 'Thumbnail',
  sideEditProps: [],
  getDefaultProps: () => ({
    title: 'Hello, world!'
  }),
}

export default Thumbnail