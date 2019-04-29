<template>
    <v-content>
        <v-container>
            <div v-if="isRequest" class="text-xs-center">
                <h1 class="display-2">Загрузка...</h1>
            </div>
            <div v-else>
                <v-btn 
                    @click="uploadToExcel" 
                    class="text-none ma-0 mb-3 ml-3" 
                    color="#2896FF" 
                    dark
                    :loading="excelState">
                    Выгрузить в Excel
                </v-btn>
                <div v-if="requests.length !== 0">
                    <request-card 
                        class="mt-4"
                        v-for="request in requests"
                        :key="request._id"
                        :request="request"
                        @updateRequest="getRequests">
                    </request-card>
                </div>
                <div v-else>
                    <h1 class="text-xs-center">Заявки отсутствуют</h1>
                </div>
            </div>
        </v-container>
    </v-content>
</template>
<script>
import RequestServices from '@/services/Requests'
import RequestCard from '@/components/RequestCard'
import zipcelx from 'zipcelx'
export default {
    components: {
        RequestCard
    },
    data(){
        return {
            requests: [],
            isRequest: true,
            excelState: false
        }
    },
    created(){
        this.getRequests();
    },
    methods: {
        async getRequests(){
            try{
                this.isRequest = true;
                let response = await RequestServices.getRequests();
                this.requests = response.data.requests;
                this.isRequest = false;
            }catch(err){
                console.log(err);
            }
        },
        uploadToExcel(){
            this.excelState = true;
            const a = {
                date: "28.04.2019",
                name: "Талгат",
                personal: "Маша",
                phone: "77022209722",
                status: true
            }
            let config = {
                filename: 'Заявки',
                sheet: {
                    data: [
                        [   
                            {
                                value: 'Имя',
                                type: 'string'
                            }, 
                            {
                                value: 'Телефон',
                                type: 'string'
                            }, 
                            {
                                value: 'Дата',
                                type: 'string'
                            }, 
                            {
                                value: 'Статус',
                                type: 'string'
                            },
                            {
                                value: 'Персонал',
                                type: 'string'
                            }
                        ]
                    ]
                }
            }

            for(let request of this.requests){
                let value = [
                    {
                        value: request.name,
                        type: 'string'
                    },
                    {
                        value: request.phone,
                        type: 'string'
                    },
                    {
                        value: request.date,
                        type: 'string'
                    },
                    {
                        value: request.status ? 'Обработанна' : 'Не обработанна',
                        type: 'string'
                    },
                    {
                        value: request.personal,
                        type: 'string'
                    }
                ]
                config.sheet.data.push(value);
            }
            zipcelx(config);
            this.excelState = false;
        },
    }
}
</script>
