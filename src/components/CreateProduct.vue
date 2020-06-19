<template>
    <div class="product">
        <h3 class="product-title">Create product</h3>
        <form class="form-content">
            <div class='form-group'>
                <label class="form-label">Name</label>
                <input class="form-input" />
            </div>
            <div class='form-group product-img'>
                <label class="form-label" for="files">Photos</label>
                <div class='form-input product-img-add'>
                    <div class="product-img-drag">
                        <h5>Drag here</h5>
                        <h5>or</h5>
                        <label class="form-input-file" for="files">Choose from PC</label>
                        <input id="files" style="visibility:hidden;" 
                            type="file"
                            multiple
                            accept="image/*"
                            alt=""
                            @change="previewImage">
                            
                    </div>
                    <div class="product-img-display" v-for="(image, key) in images" :key="key">
                        <img
                        class="preview" :ref="'image'"
                        tyle="width:70px; height:60px"
                        />
                    </div>
                </div>
            </div>
            <div class="form-group">
                <label class="form-label">Specification</label>
                <div class="product-spec">
                    <input class="form-input" />
                    <input class="form-input" />
                    <button class='btn btn-sm'>+</button>
                </div>
            </div>
            <div class='form-group'>
                <label class="form-label">Description</label>
                <textarea class="form-input-area"></textarea>
            </div>
            <div class="form-group">
                <label class="form-label">Price</label>
                <input class="form-input" />
            </div>
            <button class="btn">Save</button>
        </form>
    </div>

</template>

<script>
// import { mapActions } from 'vuex'

export default {
 name: 'CreateProduct',
  data() {
    return {
      name: '',
      photo1: null,
      photo2: '',
      photo3: '',
      images: [],
      attach: false,
      photo4: '',
      spec: '',
      selectedFile: '',
      price: '',
      description: '',
    }
  },
  methods: { 
    //   mapActions (['uploadImages']),
            previewImage: function(e) {
    //   let vm = this;
      var selectedFiles = e.target.files;
      for (let i = 0; i < selectedFiles.length; i++) {
        console.log(selectedFiles[i]);
        this.images.push(selectedFiles[i]);
      }

      for (let i = 0; i < this.images.length; i++) {
        let reader = new FileReader();
       // eslint-disable-next-line no-unused-vars
       reader.onload = (e) => {
          this.$refs.image[i].src = reader.result;

          console.log(this.$refs.image[i].src);
        };

        reader.readAsDataURL(this.images[i]);
      }
    }
}
}
</script>
<style scoped>
*{
    margin: 0;
}

.product{
    font-family: 'Balsamiq Sans', cursive;
    color: #103e51;
}

.product-title{
    text-align: center;
    text-transform: uppercase;
    background-color: #103e51;
    color: white;
    padding-top: 20px;
    height: 50px;
}

.form-content{
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: auto;
    padding: 10px;
    box-sizing: border-box;
}

.form-group{
    margin: 5px 0;
    padding: 5px;
    display: flex;
    flex-direction: column;
}

.form-label{
    margin: 2px 0;
    align-self: flex-start;
 }

.form-input{
   margin: 7px 0;
   outline: none;
}

.form-input-area{
    margin: 7px 0;
    padding: 10px;
    width: 93%;
    height: 70px;
    resize: none;
    outline: none;
    border-radius: 5px;
    border-style: solid;
 }

 .btn{
     background-color:  #103e51;
     color: white;
     height: 30px;
     border-radius: 10px;
     border: none;
     outline: none;
     border-style: none;
     min-width: 30px;
     margin: 0 7px;
    cursor: pointer;
 }

 .btn:hover{
    background-color:  transparent;
    color: #103e51;
    border: 1px solid;
 }

 .btn-sm{
     max-width: 40px;
 }

 .product-spec > *{
    display: block;
    width: 93%;
}

.product-img{
    display: flex;
    flex-direction: column;
}

.product-img-add{
    flex: 1;
}

.product-img-display{
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    max-height: 70px;
    overflow: hidden;
}

.product-img-display img{
    width: 30%;
    height: 75px;
    object-fit: contain;
}

.product-img-drag{
    text-align: center;
    margin: auto;
}

.form-input-file{
    display: block;
    font-size: 15px;
    cursor: pointer;
    border: 1px solid;
    width: 50%;
    margin: auto;
    padding: 5px 0;
    border-radius: 10px;
}

.form-input-file:hover{
    background-color: #103e51;
    color: white;
 }

@media(min-width: 900px){

    .form-content{
        width: 60%;
        font-size: 20px;
    }
    
    .form-group{
        flex-direction: row;
        justify-content: space-around;
    }

 .form-label{
        flex: 2;
     }

    .product-spec{
        flex: 7;
    }

    .product-spec > *{
        width: 97%;
    }

    .form-input-area,
    .form-input{
        flex: 7;
     }

     .btn{
         width: 30%;
         margin: auto;
     }

     .btn-sm{
         margin: 0;
     }
     .product-img-display img{
        object-fit: cover;
    }

    .product-img-add{
        display: flex;
        flex-direction: row;
    }

    .product-img-display{
        max-height: 330px;
    }
}
</style>
