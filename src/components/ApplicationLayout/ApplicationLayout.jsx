import React, {Component, PropTypes} from "react";
import {base} from "../../utils/decorators";
import Link from "../Link";
import Identity from "../Identity/Identity";


@base
export default class ApplicationLayout extends Component {
  static propTypes = {
    identity: PropTypes.object,
    page: PropTypes.node,
  }

  render() {
    return (
      <div {...this.base()}>
        <header className={this.c("header")}>
          <Link className={this.c("brand")} to="new" />
          <Identity className={this.c("identity")} identity={this.props.identity} />
        </header>
        <div className={this.c("page")}>
          {this.props.page}
        </div>
        <footer className={this.c("footer")}>
          <p>Copyright &copy; 2015</p>
          &middot;
          <p>By <a href="http://www.jamesknelson.com">James K Nelson</a></p>
          <br />
          <p><Link to="unsubscribe">Unsubscribe</Link></p>
          &middot;
          <p><a href="https://github.com/search?q=user%3Ajamesknelson+memamug">View Source on Github</a></p>
        </footer>
      </div>
    );
  }
}
