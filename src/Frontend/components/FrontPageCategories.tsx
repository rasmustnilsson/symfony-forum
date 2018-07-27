import * as React from 'react'
import CategoryCard from './CategoryCard'

interface State {
  categories: Category[]
}

export default class FrontPageCatagories extends React.Component<AuthProps, State> {

  constructor(props: AuthProps) {
    super(props);
    this.state = {
      categories: []
    }

    this.getCategories = this.getCategories.bind(this)

  }

  componentWillMount(): void {
    
    fetch('/getCategories')
      .then(res =>res.json())
      .then(data => this.setState({
        ...this.state,
        categories: data.categories
      }))
  }

  getCategories(): JSX.Element[] {
    const categories: JSX.Element[] = []

    for(let i in this.state.categories) {
      categories.push(<CategoryCard key={i} { ...this.state.categories[i] } />)
    }

    return categories
  }

  render() {
    return (
      <div>
        <div className="row my-2">
            { this.getCategories() }
        </div>
      </div>
    )
  }
}
