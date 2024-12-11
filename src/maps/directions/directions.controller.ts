/* eslint-disable prettier/prettier */
import { Controller, Get, Query } from '@nestjs/common';
import { DirectionsService } from './directions.service';

@Controller('directions')
export class DirectionsController {

    constructor(private directionsService: DirectionsService) { }

    @Get()
    getDirections(
        @Query('originId') originId: string,
        @Query('destinationId') destinatioId: string
    ) {

        return this.directionsService.getDirections(originId, destinatioId)
    }
}
