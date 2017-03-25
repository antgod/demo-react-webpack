<link rel="import" href="./Hello.tpl" />

<template>
    <div>
        <span class="text" :if="{{show}}">{{text}}</span>
        <div class="item" :for="{{item in items}}">
            <span class="name">{{item}}</span>
        </div>
         <Hello message="world"></Hello>
    </div>
</template>

<style>
    .text {
        font-size: 25rem;
        color: gray;
    }
    .name {
        color: red;
        font-size: 40rem;
    }
    .item {
        width: 200rem;
        height: 60rem;
        background-color: blue;
    }
</style>