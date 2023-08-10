<?php

namespace App\Enums;

enum Product: string {
    case CREATED = 'CREATED';
    case UPDATED = 'UPDATED';
    case DELETED = 'DELETED';
}