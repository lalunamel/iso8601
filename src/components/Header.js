import React from "react";

import colors from "../codysehl.net-scaffold/js/colors.js";

const styles = {
  header: {
    textAlign: "center",
    marginTop: 100,
    fontWeight: 400
  },
  title: {
    fontSize: 49
  },
  subtitle: {
    marginTop: 10,
    fontSize: 31,
    lineHeight: 1.2,
    color: colors.calmerBlack
  }
};

export default props => {
  return (
    <div style={styles.header}>
      <div style={styles.title}>ISO8601</div>
      <div style={styles.subtitle}>is website to help with date math</div>
    </div>
  );
};
