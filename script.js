"use strict";

class BSTNode {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BinarySearchTree {
    constructor(arr) {
        this.root = this.setUpTree(arr);
        console.log(this.root);
    }

    setUpTree(arr) {
        // ? remove duplicates/sort etc., eventually
        // ? for testing, array arrives ready to go
        return this.treeBuilder(arr);
    }

    treeBuilder(arr) {
        if (arr.length == 0) return null;
        let halfIndex = Math.floor(arr.length / 2);
        // creates a rootnode with the correct values
        // in left and right positions
        // because the array is sorted and this
        // is guaranteed
        const rootNode = new BSTNode(
            arr[halfIndex],
            this.treeBuilder(arr.slice(0, halfIndex)),
            this.treeBuilder(arr.slice(halfIndex + 1))
        );
        return rootNode;
    }
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let newTree = new BinarySearchTree(arr);
