<template>
    <v-app>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </v-app>
</template>
<style>
*{
    font-family: 'Comfortaa', sans-serif;
}
#app {
    background-color: #fcfcfc;
}
a {
    text-decoration: none;
    color: inherit;
    font-size: inherit;
}
.gs-container {
    margin: 0 auto;
    max-width: 1000px;
}
/* Router transition */
.fade-enter-active,
.fade-leave-active {
    transition-duration: 0.3s;
    transition-property: opacity;
    transition-timing-function: ease;
}
.fade-enter,
.fade-leave-active {
    opacity: 0;
}
</style>
