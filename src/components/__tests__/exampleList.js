import ExampleList from '@pageComponents/example/exampleList'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { render, fireEvent } from '@testing-library/react'

const mockStore = configureStore([])

describe('exampleList', () => {
  let component
  let mockedStore

  beforeEach(() => {
    mockedStore = mockStore({
      items: ['store item'],
    })

    component = render(
      <Provider store={mockedStore}>
        <ExampleList data-testid="teste" />
      </Provider>
    )
  })

  it('renders correctly', () => {
    expect(component.baseElement).toMatchSnapshot()
  })

  it('add an item', () => {
    mockedStore.dispatch = jest.fn()
    const { getByText, getByLabelText, findBy } = component
    const button = getByText('Add Item')
    const input = getByLabelText('Add Item ->')

    fireEvent.change(input, { target: { value: 'new item' } })
    fireEvent.click(button, new MouseEvent('click'))

    expect(mockedStore.dispatch).toHaveBeenCalledTimes(1)
  })
})
