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
const handleSubmit = async (setBuildOn) => {
  setBuildOn(true);
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

const preOrder = async (node, setString) => {
  string = string + node.name;
  setString(string);
  document.querySelector('#' + node.id).classList.add('glow_selected');
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
  if (node.left != null) {
    await preOrder(node.left, setString);
  }
  if (node.right != null) {
    await preOrder(node.right, setString);
  }

  if (node.previous != null) {
    preOrder(node.previous, setString);
  }
};

const handlePreorder = (setString) => {
  if (document.getElementById('n1').classList.contains('glow_selected')) {
    setString('');
    for (let i = 1; i < 8; i++) {
      document.getElementById('n' + i).classList.remove('glow_selected');
    }
  }
  string = 'Preorder : ';
  setString(string);
  preOrder(n1, setString);
};

const inOrder = async (node, setString) => {
  if (node.left != null) {
    await inOrder(node.left, setString);
  }

  string = string + node.name;
  setString(string);
  document.querySelector('#' + node.id).classList.add('glow_selected');
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
  if (node.right != null) {
    await inOrder(node.right, setString);
  }

  if (node.previous != null) {
    inOrder(node.previous, setString);
  }
};

const handleInorder = (setString) => {
  if (document.getElementById('n1').classList.contains('glow_selected')) {
    setString('');
    for (let i = 1; i < 8; i++) {
      document.getElementById('n' + i).classList.remove('glow_selected');
    }
  }
  string = 'Inorder : ';
  setString(string);
  inOrder(n1, setString);
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
  if (document.getElementById('n1').classList.contains('glow_selected')) {
    setString('');
    for (let i = 1; i < 8; i++) {
      document.getElementById('n' + i).classList.remove('glow_selected');
    }
  }
  string = 'PostOrder : ';
  setString(string);

  postOrder(n1, setString);
};

const wait = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
};

const handleEval = async (A, B, C, D, closeModal) => {
  if (document.getElementById('n1').classList.contains('glow_selected')) {
    for (let i = 1; i < 8; i++) {
      document.getElementById('n' + i).classList.remove('glow_selected');
    }
  }
  closeModal();
  document.getElementById('n2').innerHTML = A;
  document.getElementById('n6').innerHTML = B;
  document.getElementById('n7').innerHTML = C;
  document.getElementById('n5').innerHTML = D;
  document.getElementById('n6').classList.add('glow_selected');
  await wait();
  document.getElementById('n7').classList.add('glow_selected');
  await wait();
  document.getElementById('n6').style.visibility = 'hidden';
  await wait();
  document.getElementById('n7').style.visibility = 'hidden';
  await wait();
  document.getElementById('divider5').style.visibility = 'hidden';
  await wait();
  document.getElementById('divider6').style.visibility = 'hidden';
  await wait();
  const sum1 = parseInt(B) + parseInt(C);
  document.getElementById('n4').innerHTML = sum1;
  document.getElementById('n4').classList.add('glow_selected');
  await wait();
  document.getElementById('n5').classList.add('glow_selected');
  await wait();
  document.getElementById('n4').style.visibility = 'hidden';
  await wait();
  document.getElementById('n5').style.visibility = 'hidden';
  await wait();
  document.getElementById('divider3').style.visibility = 'hidden';
  await wait();
  document.getElementById('divider4').style.visibility = 'hidden';
  await wait();
  const sum2 = parseInt(sum1) * parseInt(D);
  document.getElementById('n3').innerHTML = sum2;
  document.getElementById('n2').classList.add('glow_selected');
  await wait();
  document.getElementById('n3').classList.add('glow_selected');
  await wait();
  document.getElementById('n2').style.visibility = 'hidden';
  await wait();
  document.getElementById('n3').style.visibility = 'hidden';
  await wait();
  document.getElementById('divider1').style.visibility = 'hidden';
  await wait();
  document.getElementById('divider2').style.visibility = 'hidden';
  await wait();
  const sum3 = parseInt(sum2) + parseInt(A);
  document.getElementById('n1').innerHTML = sum3;
  document.getElementById('n1').classList.add('glow_selected');
};
export {
  handleEval,
  handleSubmit,
  handleEvaluate,
  closeModal,
  handleInorder,
  handlePostorder,
  handlePreorder,
};
