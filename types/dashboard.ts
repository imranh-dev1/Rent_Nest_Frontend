export interface IDashboardStatistics {
    users: {
        totalUsers: number;
        totalLandlords: number;
        totalTenants: number;
    };

    properties: {
        totalProperties: number;
        availableProperties: number;
        rentedProperties: number;
        unavailableProperties: number;
    };

    categories: {
        totalCategories: number;
    };

    rentalRequests: {
        totalRentalRequests: number;
        pendingRequests: number;
        approvedRequests: number;
        rejectedRequests: number;
        cancelledRequests: number;
    };

    reviews: {
        totalReviews: number;
    };
}