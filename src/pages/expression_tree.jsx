import React, { useState } from 'react';
import './css/exptree.css';
import './../Components/componentStyles/tree.css';
import Tree from '../Components/EXTree';
import './css/popup.css';
import {
  handleSubmit,
  handleEvaluate,
  closeModal,
  handleInorder,
  handlePreorder,
  handlePostorder,
  handleEval,
} from '../Components/ExTreeFunctions';

function ExpressionTree() {
  const [traversalString, setString] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const bstArray = [8, 3, 1, 6, 4, 7, 10, 14, 13];
  const [buildOn, setBuildOn] = useState(false);
  const [A, setA] = useState(null);
  const [B, setB] = useState(null);
  const [C, setC] = useState(null);
  const [D, setD] = useState(null);

  return (
    <>
      <div className='main-div'>
        <div className='controls_div'>
          <div className='headingdiv'>
            <h2 className='main_heading'>Expression Tree</h2>
            <h4 className='intro_text'>
              Here we have Expression A+((B+C)*D) represented in Data Structure
              Binary Tree.
            </h4>
          </div>
          <div className='buttons_div'>
            <label>Click To Start Tree Building</label>
            <button
              title='Submit'
              onClick={() => handleSubmit(setBuildOn)}
              name='Submit'
              disabled={buildOn}
              className='buildbtn'>
              Build Tree
            </button>
            <h4
              className='intro_text'
              id='intro_bst'
              style={{ placeSelf: 'flex-start', display: 'none' }}>
              BST Traversals
            </h4>
            <div id='bst_operations' style={{ display: 'none' }}>
              <div className='traversal_buttons'>
                <button
                  id='prefix_traversal'
                  onClick={() => {
                    handlePreorder(setString);
                  }}>
                  Preorder
                </button>
                <button
                  id='infix_traversal'
                  onClick={() => {
                    handleInorder(setString);
                  }}>
                  Inorder
                </button>
                <button
                  id='postfix_traversal'
                  onClick={() => {
                    handlePostorder(setString);
                  }}>
                  Postorder
                </button>
              </div>
            </div>
          </div>
          <hr style={{ width: '100%' }} />

          <div id='input_div'>
            <div id='inner_inputdiv'>
              <button
                id='evaluatebtn'
                onClick={handleEvaluate}
                style={{ display: 'none' }}>
                Evaluate
              </button>
            </div>
          </div>
        </div>
        <Tree />
        <div id='string_div'>
          <h2 id='traversal_string'>{traversalString}</h2>
        </div>
        <div id='modal'>
          <div className='controls'>
            <button
              id='closebtn'
              onClick={() => {
                closeModal();
              }}>
              X
            </button>
          </div>
          <div className='content'>
            <h5>Enter values for:</h5>
          </div>
          <div className='inputs'>
            <div className='inner_field'>
              <h2>A :</h2>
              <input
                className='input'
                type='number'
                placeholder='enter value'
                value={A}
                onChange={(e) => setA(e.target.value)}
              />
            </div>
            <div className='inner_field'>
              <h2>B :</h2>
              <input
                className='input'
                type='number'
                placeholder='enter value'
                value={B}
                onChange={(e) => setB(e.target.value)}
              />
            </div>
            <div className='inner_field'>
              <h2>C :</h2>
              <input
                className='input'
                type='number'
                onChange={(e) => setC(e.target.value)}
                placeholder='enter value'
                value={C}
              />
            </div>
            <div className='inner_field'>
              <h2>D :</h2>
              <input
                className='input'
                type='number'
                placeholder='enter value'
                value={D}
                onChange={(e) => setD(e.target.value)}
              />
            </div>
          </div>
          <div className='submit-div'>
            <button
              className='submiteval'
              onClick={() => handleEval(A, B, C, D, closeModal, setString)}>
              Sumbit
            </button>
            <button
              className='cleareval'
              onClick={() => {
                setA(null);
                setB(null);
                setC(null);
                setD(null);
              }}>
              Clear
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExpressionTree;
