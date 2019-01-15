import React from 'react'
import renderer from 'react-test-renderer'

import Sidebar from './index'

const context = 'css-framework'

describe('Sidebar', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Sidebar context={context} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
