import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import IconButton, { types } from "@hig/icon-button";
import { CloseNotification24 } from "@hig/icons";
import "@hig/icon-button/build/index.css";

import stylesheet from "./stylesheet";

export default function DismissButtonPresenter({ hasHover, onClick, title }) {
  const styles = stylesheet({}, { hasHover });
  return (
    <div className={css(styles.dismissButton)}>
      <IconButton
        onClick={onClick}
        icon={<CloseNotification24 />}
        title={title}
        type={types.TRANSPARENT}
      />
    </div>
  );
}

DismissButtonPresenter.defaultProps = {
  title: "Dismiss featured notification"
};

DismissButtonPresenter.propTypes = {
  hasHover: PropTypes.bool,
  onClick: PropTypes.func,
  title: PropTypes.string
};
