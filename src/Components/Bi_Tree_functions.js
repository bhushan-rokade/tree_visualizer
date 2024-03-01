export function handleSearch2(numbers) {
  //node structures or objects
  const n1 = {
    name: "n1",
    value: 8,
    left_divider: "divider1",
    right_divider: "divider2",
    left_node: "n2",
    right_node: "n3",
  };
  const n2 = {
    name: "n2",
    value: 3,
    left_divider: "divider3",
    right_divider: "divider4",
    left_node: "n4",
    right_node: "n5",
  };
  const n3 = {
    name: "n3",
    value: 10,
    left_divider: null,
    right_divider: "divider5",
    left_node: null,
    right_node: "n6",
  };
  const n4 = {
    value: 1,
    left_divider: null,
    right_divider: null,
    left_node: null,
    right_node: null,
    name: "n4",
  };
  const n5 = {
    name: "n5",
    value: 6,
    left_divider: "divider6",
    right_divider: "divider7",
    left_node: "n7",
    right_node: "n8",
  };
  const n6 = {
    name: "n6",
    value: 14,
    left_divider: "divider8",
    right_divider: null,
    left_node: "n9",
    right_node: null,
  };
  const n7 = {
    name: "n7",
    value: 4,
    left_divider: null,
    right_divider: null,
    left_node: null,
    right_node: null,
  };
  const n8 = {
    name: "n8",
    value: 7,
    left_divider: null,
    right_divider: null,
    left_node: null,
    right_node: null,
  };
  const n9 = {
    name: "n9",
    value: 13,
    left_divider: null,
    right_divider: null,
    left_node: null,
    right_node: null,
  };
  //binding the nodes of the tree for performing searching
  n1.left_node = n2;
  n1.right_node = n3;
  n2.left_node = n4;
  n2.right_node = n5;
  n3.right_node = n6;
  n5.left_node = n7;
  n5.right_node = n8;
  n6.left_node = n9;

  let is_here = false;
  const checkNumber = (currentItem) => {
    //for checking if the element exists in the tree or not
    if (numbers == currentItem.value) {
      is_here = true;
    }
    if (currentItem.left_node != null) {
      checkNumber(currentItem.left_node);
    }
    if (currentItem.right_node != null) checkNumber(currentItem.right_node);
  };

  const rechide = async (thisone) => {
    //for hiding elements while searching the element in the BST
    document.querySelector("#" + thisone.name).classList.add("fade");
    document.querySelector("#" + thisone.name).style.visibility = "hidden";
    if (thisone.left_divider != null)
      document.querySelector("#" + thisone.left_divider).style.visibility =
        "hidden";
    if (thisone.right_divider != null)
      document.querySelector("#" + thisone.right_divider).style.visibility =
        "hidden";
    if (thisone.left_node != null) rechide(thisone.left_node);
    if (thisone.right_node != null) rechide(thisone.right_node);
  };

  const recsearch = async (currentItem) => {
    //this function searches the given element into to binary search tree
    document
      .querySelector("#" + currentItem.name) // this is for giving a glow effect to the current element
      .classList.add("glow_selected");
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 4000);
    });
    if (currentItem.value == numbers) {
      document
        .querySelector("#" + currentItem.name)
        .classList.remove("glow_selected");
      document
        .querySelector("#" + currentItem.name)
        .classList.add("glow_found");
      if (currentItem.left_divider != null) {
        document.getElementById(currentItem.left_divider).style.visibility =
          "hidden";
      }
      if (currentItem.right_divider != null) {
        document.getElementById(currentItem.right_divider).style.visibility =
          "hidden";
      }
      if (currentItem.left_node != null) {
        await rechide(currentItem.left_node);
      }
      if (currentItem.right_node != null) {
        await rechide(currentItem.right_node);
      }
      return 1;
    } else if (currentItem.value > numbers) {
      if (currentItem.right_node != null) {
        if (currentItem.left_divider != null)
          //hiding nodes which are at the right of the current node
          document.querySelector(
            "#" + currentItem.right_divider
          ).style.visibility = "hidden";
        rechide(currentItem.right_node);
        await new Promise((resolve, reject) => {
          setTimeout(() => resolve(), 2000);
        });
        document
          .querySelector("#" + currentItem.name)
          .classList.remove("glow_selected");
        document
          .querySelector("#" + currentItem.name)
          .classList.add("glow_infinite");
        return await recsearch(currentItem.left_node);
      } else if (currentItem.left_node != null) {
        await new Promise((resolve, reject) => {
          setTimeout(() => resolve(), 2000);
        });
        document
          .querySelector("#" + currentItem.name)
          .classList.remove("glow_selected");
        document
          .querySelector("#" + currentItem.name)
          .classList.add("glow_infinite");
        return await recsearch(currentItem.left_node);
      } else {
        return 0;
      }
    } else if (currentItem.value < numbers) {
      //hiding the node elements which are at the left of the node
      if (currentItem.left_node != null) {
        if (currentItem.left_divider != null) {
          document.querySelector(
            "#" + currentItem.left_divider
          ).style.visibility = "hidden";
          rechide(currentItem.left_node);
          if (currentItem.right_divider != null) {
            await new Promise((resolve, reject) => {
              setTimeout(() => resolve(), 2000);
            });
            document
              .querySelector("#" + currentItem.name)
              .classList.remove("glow_selected");
            document
              .querySelector("#" + currentItem.name)
              .classList.add("glow_infinite");
            return await recsearch(currentItem.right_node);
          } else return 0;
        } else {
          return 0;
        }
      } else if (currentItem.right_node != null) {
        if (currentItem.right_divider != null) {
          await new Promise((resolve, reject) => {
            setTimeout(() => resolve(), 2000);
          });
          document
            .querySelector("#" + currentItem.name)
            .classList.remove("glow_selected");
          document
            .querySelector("#" + currentItem.name)
            .classList.add("glow_infinite");
          return await recsearch(currentItem.right_node);
        }
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  };
  checkNumber(n1);
  if (!is_here) {
    return 0;
  }
  return recsearch(n1);
}
