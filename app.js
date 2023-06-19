
// DOM MANIPULATION

// Goal: Retail Site 
    // Dynamically change the Entire Site with a click of a button
    // General -- Mens -- Womens -- Children


    let majorContainer ={
        mens: {
            headImage: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
            optionTags: ["Boots", "Flannels", "Rugged Wear", "Shaving Cream"],
            productImages: [
                {
                    name: 'Sneakers',
                    pic: "https://images.unsplash.com/photo-1527010154944-f2241763d806?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
                },
                {
                    name: 'Boots',
                    pic: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
                },
                {
                    name: 'Flannels',
                    pic: "https://images.unsplash.com/photo-1638718297700-e828368a54e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                },
                {
                    name: 'Scarves',
                    pic: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                },
                {
                    name: 'Hoodies',
                    pic: "https://images.unsplash.com/photo-1509942774463-acf339cf87d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                },
                {
                    name: 'Hats',
                    pic: "https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=723&q=80"
                },
            ],
            textDescription: 'Update your everyday wardrobe with our collection of mens pants. Discover tailored suit pants for work or special occasions, as well as comfier sweatpants and joggers for downtime. Mix up your weekend look and swap the jeans for a pair of cargo pants or chinos. Browse a range of colors, from neutral blacks and grays to brighter shades and prints. Find everything from soft breathable cotton to functional track pants and luxe velvet dress pants.',
            lowImage: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
        },
        womens: 
            { headImage: "https://images.unsplash.com/photo-1527180718958-1721e2518786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1377&q=80",
            optionTags: ["Jeans","Shoes","socks","Hats","Dresses","Jackets"],
             productImages: [
            {
                name: 'Jeans',
                pic:"https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amVhbnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" 
            },
            {
                name: 'Shoes',
                pic: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            },
            {
                name: 'Socks',
                pic: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNvY2tzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            },
            {
                name: 'Hats',
                pic:"https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGF0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            },
            {
                name: 'Dresses',
                pic: "https://images.unsplash.com/photo-1636924003227-1895fc75857e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU4fHxkcmVzc2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            },
            {
                name: 'Jackets',
                pic:"https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amFja2V0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            },
        ],
            textDescription: 'Romantic, trendy, or casual? Our selection of womens dresses has everything you need for everyday wear, cocktail parties and black tie events. Explore our evening dresses for that upcoming wedding and choose from lace and satin styles that are perfect for guests and bridesmaids alike. Got a big night planned? Give our party dresses a whirl, featuring shimmery sequined dresses, figure-flaunting bodycon styles, and more picks youre sure to love',
            lowImage:'https://images.unsplash.com/photo-1594552072238-b8a33785b261?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZHJlc3Nlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    kids: {
             headImage: "https://images.unsplash.com/photo-1571210862729-78a52d3779a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8a2lkc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
             optionTags: ["Hats","Onesie","Blankets","Swim Wear", "PJs","Glasses"],
                 productImages: [
                {
                    name: 'Hats',
                    pic: "https://images.unsplash.com/photo-1523304108042-8ac30850c748?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk5fHxoYXRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                },
                {
                    name:'Onesie',
                    pic: "https://plus.unsplash.com/premium_photo-1668303448928-2599aab2f9fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b25zaWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                },
                {
                    name: 'Blankets',
                    pic: "https://images.unsplash.com/photo-1617721595439-8f52c9777e63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTgyfHxibGFua2V0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                },
                {
                    name: 'Swim Wear',
                    pic:"https://images.unsplash.com/photo-1528755184552-340f01ddda93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3dpbXdlYXIlMjBraWR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                },
                {
                    name: 'PJs',
                    pic: "https://images.unsplash.com/photo-1598037002653-36ef93a660d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHBhamFtYXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                },
                {
                    name: 'Glasses',
                    pic:"https://images.unsplash.com/photo-1610391261520-1688eff61a6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHN1bmdsYXNzZXMlMjBraWR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                },
            ],
                textDescription: 'Endlessly comfortable and stylish, our girls clothes range is your one-stop shop for everything she needs in her closet. Whether youre looking for snuggly sweaters and cardigans, want to refresh on everyday T-shirts and leggings, or youre searching for cool dresses and jumpsuits, weve got you covered in our edit. Weve also got girls blouses, plus an array of joggers and jeans for girls in all the staple colors and styles.',
                lowImage:'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGtpZHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
},
// -----------------------

let mainImage = document.querySelector('.mainImg')
let option = document.querySelector('.options')
let miniOp = document.querySelectorAll('.choice')
let productBox = document.querySelector('.productContainer')
let pic = document.querySelector('.polaroid')
let textBox= document.querySelector('.textContainer')

const changeAll = () => {
    changeTopPic()
    changeOptions()
    product()


    const changeMainImage = (type) =>{
    if(type === 'mens'){
        mainImage.src = majorContainer.mens.headImage
    }else if(type==='womens'){
        mainImage.src = majorContainer.womens.headImage
    }else if(type==='kids'){
        mainImage.src = majorContainer.kids.headImage
    }


const changeTopPic = () =>{
        // createImage 
        let newimage = document.createElement('img')
            newimage.setAttribute('src', majorContainer.mens.headImage)
            newimage.setAttribute('class','topPic')
        // replaceWith current
        mainImage.replaceWith(newimage)

    }

const changeOptions = () =>{
        const changeOptions = (type) =>{
            if(type === 'mens'){
               type = majorContainer.mens.optionTags
            }else if(type==='womens'){
               type = majorContainer.womens.optionTags
            }else if(type==='kids'){
                type = majorContainer.kids.optionTags
            }
        
    }

const product= () => {
        majorContainer.mens.productImages.forEach((obj)=>{
            let shopBox  = document.createElement('img')
            shopBox.setAttribute('src',obj.pic)
            shopBox.setAttribute('class','product')
            productBox.append(shopBox)
        })
    }

