var ExtensionUtils = brackets.getModule("utils/ExtensionUtils");
var React          = brackets.getModule("thirdparty/react");

import _module from '../_module';

function componentDidMount() {
  ExtensionUtils.loadStyleSheet(_module.get(), 'style/main.css');
}

function render() {
  return (
    <div className="harmony">
      Hello, world!
    </div>
  );
}

export default React.createClass({
  componentDidMount,
  render
});
