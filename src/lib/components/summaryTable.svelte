<script>
    export let payload
    export let period
    import  logo2  from '$lib/images/logo2.png'   
	    
    let last = payload.length-1;

    console.log("summary:", payload[0]['date'])
    console.log("summary:", payload[last]['date'])   

</script>


<style>
    picture {
		/* width: 40%;
		height: 30%; */
		top: 0;
		display: block;
	}
</style>

<body>
    <div class="flex justify-center items-center">
        <div class="relative flex flex-col items-center rounded-[10px] border-[1px] border-gray-200 mx-auto py-2 px-4 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
            <div class="relative flex h-9 w-full justify-center rounded-xl bg-cover" >
                
                <!-- <img src='https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/banner.ef572d78f29b0fee0a09.png' class="absolute flex h-20 w-full justify-center rounded-xl bg-cover">  -->
                <div class="absolute -bottom-2 flex h-[50px] w-[90px] items-center justify-center rounded-full border-[4px] border-white bg-white-400 dark:!border-navy-700">
                    
                     <picture class="flex">
                        <img src={logo2}
                        alt="welcome">
                    </picture>
                </div>
            </div> 
           
            <div class="mt-2 flex flex-col items-center">
                
                <p class="text-xs font-normal text-gray-600">日期</p>    
                <p class="text-xs font-normal text-gray-600">{payload[0]['date']} - {payload[last]['date']}</p>
    
                <div class="mt-2 mb-2 flex gap-14 md:!gap-14">
                    <div class="flex flex-col items-center justify-center">
                        <p class="text-xs font-bold text-navy-700 dark:text-white">Results</p>
                        <p class="text-xs font-normal text-gray-600">{payload.length}</p>
                    </div>

                    <div class="flex flex-col items-center justify-center">
                        <p class="text-xs font-bold text-navy-700 dark:text-white">节气</p>
                        <p class="text-xs font-normal text-gray-600">{period}</p>
                    </div>

                    <div class="flex flex-col items-center justify-center">
                        <p class="text-xs font-bold text-navy-700 dark:text-white">Results</p>
                        <p class="text-xs font-normal text-gray-600">{payload.length}</p>
                    </div>    
                </div>
            </div> 
        </div>  
    </div>
</body>