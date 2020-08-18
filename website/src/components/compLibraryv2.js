const React = require('react');


const classNames = require('classnames');

// const MarkdownBlock = require('./MarkdownBlock.js');

class GridBlock extends React.Component {

  array_chunk(arr, size){
    var i,
    j = arr.length,
    tempArray = [];
    for (i=0; i<j; i+=size) {
        tempArray.push(arr.slice(i,i+size));
    }
    return tempArray
  }

  renderBlockTitle(title) {
    if (!title) {
      return null;
    }

    return (
      <h2>{title}</h2>
    );
  }

  renderBlock(origBlock) {

    const block = {
      ...origBlock,
    };
    return (
        <div className="col col--4">
          {this.renderBlockTitle(block.title)}
          <p>{block.content}</p>
        </div>
    );
  }

  renderRow(origBlock, index) {

    const block = {
      ...origBlock,
    };
    console.log(block);
//  key={block.title}
    return (
      <div className='row'>
          {this.renderBlock(block[0])}
          {this.renderBlock(block[1])}

          {this.renderBlock(block[2])}

        </div>
    );
  }



  render() {
    const chuckSize = 3;
    const chunks = this.array_chunk(this.props.contents, chuckSize);
    // const list = this.props.contents;

    // const chunks = new Array(Math.ceil(list.length / chuckSize)).fill().map(_ => list.splice(0,chuckSize))

    return (
      <div className="container">

        {chunks.map(this.renderRow, this)}
      </div>
    );
  }
}

const CompLibrary = {
  Container: props => <div {...props}></div>,
  GridBlock,
  MarkdownBlock: props => <div {...props}></div>
};

module.exports = CompLibrary;
