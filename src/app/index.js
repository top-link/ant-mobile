import React from 'react'
import actionCreators from '../redux/actions'
import connect from 'react-redux/lib/components/connect'

import 'themes/global'

@connect(
  state => ({
    article: state.article
  }),
  dispatch => ({
    postArticle: (options) => dispatch(actionCreators.postArticle(options))
  })
)
class Comp extends React.Component {
  componentDidMount() {
    this.props.postArticle({
      data: {
        title: 'the title'
      }
    })
  }

  componentWillReceiveProps(nextProps) {
    this.refs.footer.tab = nextProps.location.pathname
  }

  render() {
    return <div id="root">
      {this.props.children}
    </div>
  }
}

module.exports = Comp
