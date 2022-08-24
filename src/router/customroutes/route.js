import React from "react";

export default function CustomRoute(props) {
  const Component = props.component;
  const route = props.route;
  return <Component route={route} />;
}
