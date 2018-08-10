/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import EnhancedTable from 'components/EnhancedTable';
import './style.scss';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="A React.js Boilerplate application homepage" />
        </Helmet>
        <div className="home-page">
          <section>
            <EnhancedTable {...this.props} />         
          </section>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  tasks: PropTypes.object.Required,
  onAddItem: PropTypes.func
};
