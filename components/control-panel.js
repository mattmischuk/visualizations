var ControlPanel = React.createClass({
  render: function() {
    return (
      <form className="control-panel">
        <div className="control-panel__row">
          <label className="control-panel__cell">
            Number of samples:
          </label>
          <input
            className="control-panel__cell"
            type="number"
            min="1"
            max="1000"
            ref="samplesInput"
            value={this.props.numSamples}
            onChange={this.handleChange}>
          </input>
        </div>
        <div className="control-panel__row">
          <label
            className="control-panel__cell">
            Radius:
          </label>
          <input
            className="control-panel__cell"
            type="number"
            min="5"
            max="1000"
            ref="radiusInput"
            value={this.props.radius}
            onChange={this.handleChange}>
          </input>
        </div>
        <div className="control-panel__row">
          <label className="control-panel__cell">
            Construction Mode:
          </label>
          <select className="control-panel__cell"
            ref="constructionModeSelect"
            defaultValue="wireframe"
            value={this.props.constructionMode}
            onChange={this.handleChange}>
            <option value="overlapping-circles">Overlapping Circles</option>
            <option value="linear-cells">Linear Cells</option>
            <option value="arc-cells">Arc Cells</option>
            <option value="qbezier-cells">Quadratic Bezier Cells</option>
          </select>
        </div>
        <div className="control-panel__row">
          <label className="control-panel__cell">
            Render Mode:
          </label>
          <select className="control-panel__cell"
            ref="renderModeSelect"
            defaultValue="wireframe"
            value={this.props.renderMode}
            onChange={this.handleChange}>
            <option value="line">Line Render</option>
            <option value="solid">Solid Render</option>
          </select>
        </div>
        <div className="control-panel__row">
          <label className="control-panel__cell">
            Show Guide Circle:
          </label>
          <input type="checkbox" className="control-panel__cell"
            ref="showGuideCircle"
            defaultValue="false"
            checked={this.props.showGuideCircle}
            onChange={this.handleChange}/>
        </div>
      </form>
    );
  },

  handleChange: function() {
    this.props.onUserInput({
      numSamples: this.refs.samplesInput.getDOMNode().value,
      radius: this.refs.radiusInput.getDOMNode().value,
      constructionMode: this.refs.constructionModeSelect.getDOMNode().value,
      renderMode: this.refs.renderModeSelect.getDOMNode().value,
      showGuideCircle: this.refs.showGuideCircle.getDOMNode().checked
    });
  }
});
