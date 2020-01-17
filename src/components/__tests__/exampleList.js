import renderer from 'react-test-renderer'
import ExampleList from '@pageComponents/example/exampleList'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

const mockStore = configureStore([])

describe('exampleList', () => {
  let component
  let mockedStore

  beforeEach(() => {
    mockedStore = mockStore({
      items: [],
      requests: {},
    })

    component = renderer.create(
      <Provider store={mockedStore}>
        <ExampleList />
      </Provider>
    ).toJSON()
  })

  it('renders correctly', () => {
    expect(component).toMatchSnapshot()
  })

  it('add an item', () => {
    mockedStore.dispatch = jest.fn()

    renderer.act(() => {
      console.log(component.root, 'aqui eu')
      component.root.findByType('button').props.onClick()
    });

    expect(store.dispatch).toHaveBeenCalledTimes(1)
  })
})
