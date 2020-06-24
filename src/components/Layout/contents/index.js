import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Media from "react-media";
import { Layout } from "antd";

class ContentLayout extends React.Component {

    render() {
        const { children } = this.props;
        return (
            <div>
                <Media
                    query={{ maxWidth: 1024 }}
                >
                    {matches =>
                        !matches ? (
                            <Fragment>
                                <Layout.Content>
                                    {children}
                                </Layout.Content>
                            </Fragment>
                        ) : (
                            <div> Hello World </div>
                    )}
                </Media>
            </div>
        );
    }
}

ContentLayout.propTypes = {
    children: PropTypes.node
}

export default ContentLayout;