var n7 = {
  id: 'n7',
  name: 'C',
  left: null,
  right: null,
  previous: n4,
};
var n6 = {
  id: 'n6',
  name: 'B',
  left: null,
  right: null,
  previous: n4,
};
var n5 = {
  id: 'n5',
  name: 'D',
  left: null,
  right: null,
  previous: n3,
};
var n4 = {
  id: 'n4',
  name: '+',
  left: n6,
  right: n7,
  previous: n3,
};
var n3 = {
  id: 'n3',
  name: '*',
  left: n4,
  right: n5,
  previous: n1,
};
var n2 = {
  id: 'n2',
  name: 'A',
  left: null,
  right: null,
  previous: n1,
};

var n1 = {
  id: 'n1',
  name: '+',
  left: n2,
  right: n3,
  previous: null,
};

//end of the nodes section
const waitsec = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 600);
  });
};
const handleSubmit = async () => {
  window.scrollBy(0, 1000);
  document.getElementById('intro_bst').style.display = 'flex';
  document.getElementById('bst_operations').style.display = 'flex';

  for (let i = 1; i <= 7; i++) {
    if (i == 2) {
      for (let n = 1; n <= 2; n++) {
        document.getElementById('divider' + n).style.visibility = 'initial';
        await waitsec();
      }
    } else if (i == 5) {
      for (let n = 3; n <= 4; n++) {
        document.getElementById('divider' + n).style.visibility = 'initial';
        document.getElementById('divider' + n).style.visibility = 'initial';
        await waitsec();
      }
    } else if (i == 7) {
      for (let n = 5; n <= 6; n++) {
        document.getElementById('n' + i).style.visibility = 'initial';
        document.getElementById('divider' + n).style.visibility = 'initial';
        await waitsec();
      }
    }
    if (i < 15 || i == 7) {
      document.getElementById('n' + i).style.visibility = 'initial';
    }
    await waitsec();
  }
  document.getElementById('evaluatebtn').style.display = 'block';
};

const handleEvaluate = () => {
  document.getElementById('modal').style.display = 'block';
  document.querySelector('.main-div').classList.add('blur-main');
};
const closeModal = () => {
  document.getElementById('modal').style.display = 'none';
  document.querySelector('.main-div').classList.remove('blur-main');
};

let string = '';
const handlePreorder = (setString) => {
  string = 'Preorder : ';
  setString(string);
};

const handleInorder = (setString) => {
  string = 'Inorder : ';
  setString(string);
};

const postOrder = async (node, setString) => {
  if (node.left != null) {
    await postOrder(node.left, setString);
  }
  if (node.right != null) {
    await postOrder(node.right, setString);
  }
  string = string + node.name;

  setString(string);
  document.querySelector('#' + node.id).classList.add('glow_selected');
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
  if (node.previous != null) {
    postOrder(node.previous, setString);
  }
};
const handlePostorder = (setString) => {
  string = 'PostOrder : ';
  setString(string);

  postOrder(n1, setString);
};
export {
  handleSubmit,
  handleEvaluate,
  closeModal,
  handleInorder,
  handlePostorder,
  handlePreorder,
};
