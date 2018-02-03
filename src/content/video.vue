<template>
  <el-row>
    <el-col>
      <div class="item">
        <div class="player">
          <video width="320" height="240" controls>
            <source src="http://localhost:3000/video" >
            Your browser does not support the video tag.
          </video>
          <!--<video-player class="vjs-custom-skin"-->
                        <!--ref="videoPlayer"-->
                        <!--:options="playerOptions"-->
                        <!--:playsinline="true">-->
          <!--</video-player>-->
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  // custom skin css
  import 'video.js/dist/video-js.css'

  import {videoPlayer} from 'vue-video-player'

  export default {
    data() {
      return {
        // videojs options
//        playerOptions: {
//          height: '360',
//          autoplay: true,
//          muted: true,
//          language: 'en',
//          playbackRates: [0.7, 1.0, 1.5, 2.0],
//          sources: [{
//            type: "video/mkv",
//            src: require('../../../server/videos/3_2_5.mkv'),
//          }],
//        }
      }
    },
    components: {
      videoPlayer
    },
  }
</script>
