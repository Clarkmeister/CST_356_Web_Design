<template>
<div>
<h1> Test Company Name</h1>
    <div class="hpimage1">
        <img src="../assets/home.png">
    </div>

    <h2 id="hpheader1">Heading 1</h2>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut nibh tempus, bibendum diam id, lacinia massa. Cras a diam ut lectus auctor vehicula vel at libero. Duis molestie iaculis ante, nec auctor ex ultricies ac. In placerat suscipit sem, ac fringilla leo ornare a. Aenean nunc erat, sagittis nec dapibus vel, commodo non nibh. Curabitur sit amet ullamcorper dui, eu tempor ex. Suspendisse auctor tempus eros non suscipit. Praesent aliquam vitae ante in molestie. Aenean eu metus id mi pretium dapibus. Fusce ac vestibulum ex, tempus vestibulum risus. Nunc cursus sapien id laoreet sollicitudin. Nulla vehicula, nunc sit amet sodales maximus, quam nunc luctus sapien, ac lobortis justo erat sit amet tortor. In purus diam, feugiat sit amet efficitur interdum, pulvinar eu nulla. Fusce posuere velit ligula, quis sodales tortor feugiat ut. Praesent nunc quam, rhoncus id orci id, porta egestas erat.
    </p>
    
    <h2 id="hpheader2">Heading 2</h2>
    <p>
        Mauris eget feugiat nisl. Curabitur a bibendum ipsum. Donec ut ornare dolor, eu finibus nibh. Vivamus sodales maximus magna nec volutpat. Nullam cursus ac tellus eu aliquam. Morbi pellentesque enim id lectus suscipit pellentesque. Quisque facilisis lacinia quam, eu venenatis justo commodo id. Maecenas a dolor maximus, condimentum lacus et, dignissim dui. Praesent sit amet neque egestas, pellentesque sem quis, vestibulum purus. Quisque maximus nibh ac neque eleifend, a lacinia lacus ultrices. In sed iaculis quam.
    </p>
    
    <h2 id="hpheader3">Heading 3</h2>
    <p>
        Praesent aliquet posuere lectus, ac varius metus consectetur tristique. Pellentesque volutpat dolor in elit blandit, et ultricies arcu rhoncus. Quisque vel tellus blandit, lacinia justo nec, ultricies arcu. Pellentesque sit amet ligula sit amet mauris commodo ultrices. Pellentesque congue viverra euismod. Fusce eleifend urna quis felis ultricies, sed rhoncus ligula consectetur. Cras consequat luctus velit quis egestas. Aliquam tellus velit, ultricies vel condimentum at, gravida in magna. Fusce nec bibendum justo. Phasellus pulvinar nec libero ac dignissim. Nulla ut leo sapien. Pellentesque molestie turpis nunc, non interdum velit congue quis.
    </p>
</div>
</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
    color: white;
    padding-left: 20px;
    padding-right: 20px;
}

.hpimage1 {
    text-align: center;
}

#title_header {
    color: white;
    text-align: center;
}

#hpheader1 {
    color: white;
    padding: 20px;
}

#hpheader2 {
    color: white;
    padding: 20px;
}

#hpheader3 {
    color: white;
    padding: 20px;
}

.formentry {
    margin-top: 20px;
}
</style>
