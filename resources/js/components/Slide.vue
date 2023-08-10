<template>
    <div class="container mb-2">
    <div class="col-md-12">
    <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src="https://picsum.photos/seed/picsum/1280/420

" alt="...">
            </div>
            <div class="carousel-item">
            <img src="https://picsum.photos/seed/picsum/1280/420

"  alt="...">
            </div>
            <div class="carousel-item">
            <img src="https://picsum.photos/seed/picsum/1280/420

" alt="..." >
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</div>
</div>
</template>

<style>

.carousel > .carousel-inner > .carousel-item > img{
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
}
</style>

<script setup>
</script>