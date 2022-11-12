"use strict";

class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BinaryTree {
    constructor(arr) {
        this.root = this.buildTree(arr);
        console.log(this);
    }

    sortArr(arr) {
        // sort arr
        arr.sort(function (a, b) {
            return a - b;
        });

        // remove duplicates
        arr = [...new Set(arr)];
        console.log(arr);

        return arr;
    }

    buildTree(arr) {
        if (arr.length == 0) return null;
        // do the sorting
        // and removal of duplicates here
        this.sortArr(arr);
        let halfIndex = Math.floor(arr.length / 2);
        console.log(halfIndex);
        let node = new Node(arr[halfIndex]);
        node.left = this.buildTree(arr.slice(0, halfIndex));
        node.right = this.buildTree(arr.slice(halfIndex + 1));
        return node;
    }

    insert(value) {
        arr.push(value);
        arr = this.sortArr(arr);
        this.root = this.buildTree(arr);
    }

    delete(value) {
        // 1) find & delete the value in the original array
        // 2) rebuild the tree
        arr.forEach((num) => {
            if (num == value) {
                let getRid = arr.indexOf(num);
                arr.splice(getRid, 1);
            }
        });
        this.sortArr(arr);
        this.root = this.buildTree(arr);
        // * advantage of this sample case is that all the values in the array are unique
    }
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node.right !== null) {
        prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
        prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
};

let arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

let newTree = new BinaryTree(arr);

prettyPrint(newTree.root);
console.log(newTree.root);

newTree.insert(77);
prettyPrint(newTree.root);
newTree.insert(5);
prettyPrint(newTree.root);
newTree.delete(77);
prettyPrint(newTree.root);

// 1) get the root
// 2) recursively call method to assign other elements of array
