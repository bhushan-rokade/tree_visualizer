import React, { useState } from 'react';
import './css/exptree.css';
import './../Components/componentStyles/tree.css';
import Tree from '../Components/BSTree';
import { handleSearch2, handleSubmit } from '../Components/Bi_Tree_functions';

function BinaryTree() {
  const [disabled, setDisabled] = useState(false);
  const [buidlOn, setBuildOn] = useState(false);
  const [numbers, setNumbers] = useState(0);

  const handleSearch = () => {
    const result = handleSearch2(numbers);

    if (result == 0) {
      alert('element not found');
      location.reload();
    }
  };

  const handleClear = async () => {
    location.reload();
  };
  return (
    <>
      <div className='main-div'>
        <div className='controls_div'>
          <div className='headingdiv'>
            <h2 className='main_heading'>Binary Search Tree</h2>
            <h4 className='intro_text'>
              Here we have numbers [8,3,1,6,4,7,10,14,13] represented in Data
              Structure Binary Search Tree.
            </h4>
          </div>
          <div className='buttons_div'>
            <label>Click To Start Tree Building</label>
            <button
              title='Submit'
              onClick={handleSubmit}
              name='Submit'
              disabled={buidlOn}
              className='buildbtn'>
              Build Tree
            </button>
          </div>
          <hr style={{ width: '100%' }} />
          <div id='input_div' style={{ display: 'none' }}>
            <div id='inner_inputdiv'>
              <label id='searchlabel'>Enter number for searching</label>
              <input
                id='search_input'
                style={{ textAlign: 'center' }}
                defaultValue=''
                onChange={(e) => setNumbers(e.target.value)}
                disabled={disabled}
              />
              <div
                style={{
                  height: '70%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <button
                  id='searchbtn'
                  onClick={() => {
                    setDisabled(true);
                    handleSearch();
                  }}>
                  Search
                </button>
                <button id='clearbtn' onClick={handleClear}>
                  Clear
                </button>
              </div>
            </div>
          </div>
        </div>

        <Tree />
      </div>
    </>
  );
}

export default BinaryTree;
